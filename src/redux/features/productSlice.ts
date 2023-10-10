import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import productServices from "./productServices";
import { IProduct } from "../../interfaces";


interface IProductState {
  products: IProduct[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: IProductState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Get a list of Products
export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await productServices.getProducts();
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProducts.fulfilled,
      (state, { payload }: PayloadAction<IProduct[]>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = payload;
      }
    );
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
