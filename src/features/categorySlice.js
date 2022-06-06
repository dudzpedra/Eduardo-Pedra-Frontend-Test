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
      state.category = state.categoriesList[0]
    },
    setCategory(state, action) {
      state.category = action.payload
    }
  },
});

export const { setCategories, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
