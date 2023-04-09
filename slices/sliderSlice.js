import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const sliderSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = sliderSlice.actions;

export default sliderSlice.reducer;
