const cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, title, price, image, color } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            const newPrice = item.price + price;
            const newAmount = item.amount + 1;

            return { ...item, price: newPrice, amount: newAmount };
          } else return { ...item };
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = { id: id + color, amount: 1, title, price, image, color };
        return { ...state, cart: [newItem, ...state.cart] };
      }
    }

    case "REMOVE_ITEM": {
      return { ...state, cart: action.payload };
    }

    case "TOGGLE_AMOUNT": {
      // id: id + color (already assigned)
      const { id, value } = action.payload;

      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            const newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          }

          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (item.amount === 1) newAmount = 1;
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });

      return { ...state, cart: tempCart };
    }

    case "COUNT_TOTAL_PRICE": {
      let totalItems = 0;
      let totalAmount = 0;
      const cart = state.cart;

      cart.forEach((cartItem) => {
        totalItems += cartItem.amount;
        totalAmount += cartItem.price * cartItem.amount;
      });

      return { ...state, totalItems, totalAmount };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
