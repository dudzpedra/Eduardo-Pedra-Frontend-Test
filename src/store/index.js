import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import categoryReducer from '../features/categorySlice'
import currencyReducer from "../features/currencySlice";
import productReducer from "../features/productSlice";
import { loadState } from "./storage";
//import localStorageMiddleware from "./middlewares/localStorage";

/* const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState'));
  }
}; */

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    currency: currencyReducer
  },
  preloadedState: loadState()
  /* preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware) */
})

export default store