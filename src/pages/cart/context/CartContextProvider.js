/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useReducer } from "react";
const initial = {
  selectedItem: [],
  total: 0,
  checkout: false,
  itemCounter: 0,
};
const sumCounter = (items) => {
  let itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
        ...sumCounter(state.selectedItem),
      };
    case "REMOVE":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumCounter(newSelectedItem),
      };
    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
        ...sumCounter(state.selectedItem),
      };
    case "DECREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
        ...sumCounter(state.selectedItem),
      };
    case "CLEAR":
      return {
        selectedItem: [],
        total: 0,
        checkout: false,
        itemCounter: 0,
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        total: 0,
        checkout: true,
        itemCounter: 0,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();
function CartContextProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, initial);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
