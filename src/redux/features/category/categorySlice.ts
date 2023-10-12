import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import categoryServices from "./categoryServices";
import { ICategory } from "../../../interfaces";

interface ICategoryState {
  categories: ICategory[]
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: ICategoryState = {
  categories: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// Get a list of Categories
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await categoryServices.getCategories();
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.response?.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get a categories
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    });
    builder.addCase(
      getCategories.fulfilled,
      (state, { payload }: PayloadAction<ICategory[]>) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        state.categories = payload;
      }
    );
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = payload as string;
    });
  },
});

export default categorySlice.reducer;

