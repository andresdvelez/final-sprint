import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sliderReducer from "./slices/sliderSlice";

export const store = configureStore({
  reducer: {
    count: sliderReducer,
    auth: authReducer,
  },
});
