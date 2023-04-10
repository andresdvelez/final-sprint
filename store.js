import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import carReducer from "./slices/carSlice";
import dishReducer from "./slices/dishSlice";
import sliderReducer from "./slices/sliderSlice";

export const store = configureStore({
  reducer: {
    count: sliderReducer,
    auth: authReducer,
    car: carReducer,
    dish: dishReducer,
  },
});
