import toast from "react-hot-toast";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS": { // we always make prices clear at the first (loading products)
      const allPrices = action.payload.map((product) => product.price);
      const maxPrice = Math.max(...allPrices);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload].map((product) => {
          const isLiked = state.favoriteProducts.some(
            (fav) => fav.id === product.id
          );
          return { ...product, isLiked };
        }),
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    }

    case "FAV_PRODUCT": {
      const id = action.payload;
      const tempItem = state.allProducts.find((item) => item.id === id);

      if (tempItem) {
        // Check if the product is already in the favoriteProducts
        const alreadyLiked = state.favoriteProducts.some(
          (item) => item.id === id
        );

        // If the product is already in the favoriteProducts state, unlike it
        if (alreadyLiked) {
          toast("این کالا از لیست علاقه‌مندی ها حذف شد.", { icon: "🗑️" });
          // Return the updated state with the new favoriteProducts array and updated filteredProducts array
          return {
            ...state,
            favoriteProducts: state.favoriteProducts.filter(
              (item) => item.id !== id
            ),
            filteredProducts: state.filteredProducts.map((item) =>
              item.id === id ? { ...item, isLiked: false } : item
            ),
            allProducts: state.allProducts.map((item) =>
              item.id === id ? { ...item, isLiked: false } : item
            ),
          };
        } else {
          toast("این کالا به لیست علاقه‌مندی ها اضافه شد.", { icon: "❤️" });
          // If the product is not already in the favoriteProducts state, like it
          const likedItem = { ...tempItem, isLiked: true };
          // Return the updated state with the new favoriteProducts array and updated filteredProducts array.
          return {
            ...state,
            favoriteProducts: [likedItem, ...state.favoriteProducts],
            filteredProducts: state.filteredProducts.map((item) =>
              item.id === id ? { ...item, isLiked: true } : item
            ),
            allProducts: state.allProducts.map((item) =>
              item.id === id ? { ...item, isLiked: true } : item
            ),
          };
        }
      }
    }

    case "UPDATE_COMPANIES":
      return {
        ...state,
        filters: { ...state.filters, companies: action.payload },
      };

    case "UPDATE_SEARCH":
      return { ...state, filters: { ...state.filters, text: action.payload } };

    case "UPDATE_CATEGORY":
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };

    case "UPDATE_COLORS":
      return {
        ...state,
        filters: { ...state.filters, colors: action.payload },
      };

    case "UPDATE_PRICE":
      return { ...state, filters: { ...state.filters, price: action.payload } };

    case "FILTER_PRODUCTS": {
      // for filtering we always need a copy of "all products"
      let tempProducts = [...state.allProducts];

      const { text, price, category, companies, colors } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.title.toLowerCase().includes(text)
        );
      }
      if (category) {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      if (price) {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      if (companies.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          companies.some((company) => [product.company].includes(company))
        );
      }
      if (colors.length > 0) {
        tempProducts = tempProducts.filter((product) =>
          colors.some((color) => [product.colors].flat().includes(color))
        );
      }

      tempProducts = tempProducts.map((product) => {
        const isLiked = state.favoriteProducts.some(
          (fav) => fav.id === product.id
        );
        return { ...product, isLiked };
      });

      return { ...state, filteredProducts: tempProducts };
    }

    case "UPDATE_SORT": {
      const { value } = action.payload;
      return { ...state, sort: value };
    }

    case "SORT_PRODUCTS": {
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === "گران‌ترین‌محصول") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "ارزان‌ترین‌محصول") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }

      return { ...state, filteredProducts: tempProducts };
    }

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "",
          colors: [],
          companies: [],
          price: state.filters.maxPrice,
        },
      };

    case "CLEAR_SORT":
      return { ...state, sort: "مرتب‌سازی", filters: { ...state.filters } };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
