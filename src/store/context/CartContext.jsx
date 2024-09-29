import React, { useReducer, useContext, useEffect } from "react";
import reducer from "../reducers/cart_reducer.jsx";
import toast from "react-hot-toast";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) return JSON.parse(localStorage.getItem("cart"));
  else return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
};

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: "COUNT_TOTAL_PRICE" });
  }, [state.cart]);

  const addToCart = ({ id, title, price, image, color }) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, title, price, image, color } });
    toast.success("این کالا به سبد خرید اضافه شد.")
  };

  const removeItem = (id) => {
    let tempCart = [...state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    dispatch({ type: "REMOVE_ITEM", payload: tempCart });

    toast("این کالا از سبد خرید حذف شد.", { icon: "🗑️" });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
