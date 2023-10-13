import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

export interface ICart extends IProduct {
  quantity: number;
}

export interface ICartState {
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
            ? { ...existItem, quantity: action.payload.quantity }
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
    incrementQuantity: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((x) => x.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "../../../interfaces";

// export interface ICart extends IProduct {
//   quantity: number;
// }

// export interface ICartState {
//   cart: ICart[];
// }

// const cart = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart") as string)
//   : [];

// const initialState: ICartState = {
//   cart: cart ? cart : [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;

//       const existItem = state.cart.find((item) => item.id === item.id);
//       if (existItem) {
//         state.cart = state.cart.map((x) => (x.id === existItem.id ? { ...existItem, quantity: existItem.quantity + 1 } : x));
//       } else {
//         state.cart.push({
//           ...item,
//           quantity: 1,
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },

//     incrementQuantity: (state, action) => {
//       const id = action.payload;
//      state.cart =  state.cart.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }

//          return item;
//       })

//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },

//     decrementQuantity: (state, action) => {
//       const id = action.payload;
//       state.cart =  state.cart.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity - 1 };
//         }

//         return item;
//       })
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     removeFromCart: (state, action) => {
//       const id = action.payload;
//       state.cart = state.cart.filter((x) => x.id !== id);
//       localStorage.setItem("cart", JSON.stringify(state.cart));
//     },
//     clearCart: (state) => {
//       state.cart = [];
//       localStorage.removeItem("cart");
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
//   incrementQuantity,
//   decrementQuantity,
// } = cartSlice.actions;

// export default cartSlice.reducer;
