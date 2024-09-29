import React, { useReducer, useContext, useEffect } from "react";

import { useProductsContext } from "./ProductsContext.jsx";
import reducer from "../reducers/filter_reducer.jsx";

const getLocalStorage = (key) => {
  let storedList = localStorage.getItem(key);
  if (storedList) return JSON.parse(localStorage.getItem(key));
  else return [];
};

const initialState = {
  allProducts: [],
  filteredProducts: getLocalStorage("filteredProducts"),
  favoriteProducts: getLocalStorage("favorites"),
  sort: "مرتب‌سازی",
  filters: {
    companies: [],
    colors: [],
    text: "",
    category: "",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  // 1. we need all products when it comes to filtering, so we get it from "useProductsContext":
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // 2. to get a copy of them
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      "filteredProducts",
      JSON.stringify(state.filteredProducts)
    );
    localStorage.setItem("favorites", JSON.stringify(state.favoriteProducts));
  }, [state.filteredProducts, state.favoriteProducts]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.filters, state.sort]);

  const updateFavorites = (id) => {
    dispatch({ type: "FAV_PRODUCT", payload: id });
  };

  // checkboxes
  const updateCompanies = (title) => {
    const currentIndex = state.filters.companies.indexOf(title);
    const newChecked = [...state.filters.companies];

    if (currentIndex === -1) newChecked.push(title);
    else newChecked.splice(currentIndex, 1);

    dispatch({ type: "UPDATE_COMPANIES", payload: newChecked });
  };

  const updateColors = (title) => {
    const currentIndex = state.filters.colors.indexOf(title);
    const newChecked = [...state.filters.colors];

    if (currentIndex === -1) newChecked.push(title);
    else newChecked.splice(currentIndex, 1);

    dispatch({ type: "UPDATE_COLORS", payload: newChecked });
  };

  const updateSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SEARCH", payload: value });
  };

  const updateCategory = (title) => {
    dispatch({ type: "UPDATE_CATEGORY", payload: title });
  };

  const updatePrice = (e) => {
    const value = Number(e.target.value);
    dispatch({ type: "UPDATE_PRICE", payload: value });
  };

  const updateSort = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "buttonSort") value = e.target.textContent;
    dispatch({ type: "UPDATE_SORT", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const clearSort = () => {
    dispatch({ type: "CLEAR_SORT" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFavorites,
        updateCompanies,
        updateSearch,
        updateColors,
        updateCategory,
        updatePrice,
        updateSort,
        clearFilters,
        clearSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
