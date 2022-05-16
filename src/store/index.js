import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import categoryReducer from '../features/categorySlice'
import productReducer from "../features/productSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer
  }
})

export default store