const products_reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_FILTER_MODAL":
      return { ...state, isFilterModalOpen: true };

    case "CLOSE_FILTER_MODAL":
      return { ...state, isFilterModalOpen: false };

    case "OPEN_SORT_MODAL":
      return { ...state, isSortModalOpen: true };

    case "CLOSE_SORT_MODAL":
      return { ...state, isSortModalOpen: false };

    case "GET_PRODUCTS_BEGIN":
      return { ...state, isProductsLoading: true };

    case "GET_PRODUCTS_SUCCESS":
      return { ...state, isProductsLoading: false, products: action.payload };

    case "GET_PRODUCTS_ERROR":
      return { ...state, isProductsLoading: false, productsError: true };

    case "GET_SINGLE_PRODUCT_BEGIN":
      return {
        ...state,
        isSingleProductLoading: true,
        isSingleProductError: false,
      };

    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };

    case "GET_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isSingleProductError: true,
      };

    case "LIKE_PRODUCT": {
      const { isLiked } = state;
      return { ...state, isLiked: !isLiked };
    }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
