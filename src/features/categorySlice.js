import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesList: null,
  category: null
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categoriesList = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    }
  },
});

export const { setCategories, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
