import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = carSlice.actions;

export default carSlice.reducer;
