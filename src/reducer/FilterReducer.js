const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let prizeArr = action.payload.map((curr) => {
        return curr.price;
      });

      //first way to find max in array with apply
      // let maxPrize = Math.max.apply(null, prizeArr);
      // console.log(maxPrize);

      // second way to find max in array with map

      let maxPrice = Math.max(...prizeArr);
      console.log(maxPrice);
      console.log(prizeArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: {
          ...state.filter,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORTING_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      let { name, value } = action.payload;

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filter.maxPrice,
          minPrice: state.filter.minPrice,
          price: state.filter.maxPrice,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filter;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.company === company;
        });
      }

      if (color != "all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.colors.includes(color);
        });
      }

      if (price == 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (currElem) => currElem.price == price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (currElem) => currElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
