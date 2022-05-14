import { setAll, setClothes, setTech } from "../features/categorySlice";
import fetchAllProducts from "../services/fetch-all-products";
import fetchClothesProducts from "../services/fetch-clothes";
import fetchTechProducts from "../services/fetch-tech";

export const setAllProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchAllProducts();
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setClothesProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchClothesProducts();
      dispatch(setClothes(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setTechProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchTechProducts();
      dispatch(setTech(data));
    } catch (e) {
      console.error(e);
    }
  };
};
