import React, { useReducer, createContext } from "react";
const initialState = {
  seletedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartReduser = (state, product) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.seletedItems.find((item) => item.id === action.payload.id)) {
        state.seletedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        seletedItems: [...state.seletedItems],
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.seletedItems.filter((item) =>
        item.id(newSelectedItems)
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity--;
      return {
        ...state,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReduser, initialState);
  return (
    <CartContext.Provider value={(state, dispatch)}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
