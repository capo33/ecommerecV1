import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import productServices from "./productServices";
import { IProduct } from "../../interfaces";

interface IProductState {
  products: IProduct[];
  product: IProduct | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: IProductState = {
  products: [],
  product: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Get a list of Products

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getProducts();
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data);
    }
  }
);

// Get a Product by id
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string, thunkAPI) => {
    try {
      const response = await productServices.getProductById(id);
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get a products
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

    // Get a product by id
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProductById.fulfilled,
      (state, { payload }: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = payload;
      }
    );
    builder.addCase(getProductById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
