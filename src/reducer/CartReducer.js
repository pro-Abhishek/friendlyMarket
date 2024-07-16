import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;

    let existingProduct = state.cart.find(
      (currElem) => currElem.id == id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id == id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount,
          };
        } else {
          return {
            ...currElem,
          };
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "TOTAL_CART_ITEM") {
    let updatedCartItems = state.cart.reduce((initialState, currElem) => {
      initialState = initialState + currElem.amount;
      return initialState;
    }, 0);
    return {
      ...state,
      total_item: updatedCartItems,
    };
  }

  if (action.type === "TOTAL_AMOUNT") {
    let updatedCartItems = state.cart.reduce((initialState, currElem) => {
      initialState = initialState + currElem.amount * currElem.price;
      return initialState;
    }, 0);
    return {
      ...state,
      total_amount: updatedCartItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updateCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default CartReducer;
