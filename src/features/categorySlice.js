import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: null,
  clothes: null,
  tech: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setAll(state, action) {
      state.all = action.payload;
    },
    setClothes(state, action) {
      state.clothes = action.payload;
    },
    setTech(state, action) {
      state.tech = action.payload;
    },
  },
});

export const { setAll, setClothes, setTech } = categorySlice.actions;

export default categorySlice.reducer;
