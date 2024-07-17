import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";
import { useEffect } from "react";

const CartContext = createContext();
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("MyShop");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_CART_ITEM" });
    dispatch({ type: "TOTAL_AMOUNT" });
    localStorage.setItem("MyShop", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
