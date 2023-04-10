import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  multiplier: 1,
  price: 0,
  ingredients: [
    {
      id: 0,
      label: "Tomatoes",
      selected: false,
      price: 2,
    },
    {
      id: 1,
      label: "Grain",
      selected: false,
      price: 1,
    },
    {
      id: 2,
      label: "Lettuce leaf",
      selected: false,
      price: 1,
    },
  ],
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload * state.multiplier;
    },
    resetPrice: (state) => {
      state.price = 0;
    },
    setIngredient: (state, action) => {
      state.ingredients[action.payload].selected = true;
      state.price += state.ingredients[action.payload].price * state.multiplier;
    },
    removeIngredient: (state, action) => {
      state.ingredients[action.payload].selected = false;
      state.price -= state.ingredients[action.payload].price * state.multiplier;
    },
    resetIngredients: (state) => {
      state.ingredients = initialState.ingredients;
    },
    addMultiplier: (state) => {
      state.multiplier += 1;
    },
    restMultiplier: (state) => {
      state.multiplier -= 1;
    },
    resetMultiplier: (state) => {
      state.multiplier = 1;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    backPage: (state) => {
      state.page -= 1;
    },
  },
});

export const {
  setPrice,
  setIngredient,
  removeIngredient,
  addMultiplier,
  resetPrice,
  restMultiplier,
  resetIngredients,
  nextPage,
  backPage,
} = dishSlice.actions;

export default dishSlice.reducer;
