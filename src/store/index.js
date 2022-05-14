import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../features/categorySlice'

const store = configureStore({
  reducer: {
    categories: categoryReducer
  }
})

export default store