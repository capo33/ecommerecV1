import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

interface ICart extends IProduct {
  quantity?: number;
}

interface ICartState {
  cart: ICart[];
}

const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : [];

const initialState: ICartState = {
  cart: cart ? cart : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existItem) {
        state.cart = state.cart.map((x) =>
          x.id === action.payload.id
            ? { ...existItem, quantity: (existItem.quantity || 0) + 1 }
            : x
        );
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((x) => x.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
