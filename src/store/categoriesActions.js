import { setAll, setClothes, setTech } from "../features/categorySlice";
import fetchCategory from "../services/fetch-category";

export const setAllProducts = (name) => {
  return async (dispatch) => {
    try {
      const data = await fetchCategory(name);
      dispatch(setAll(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setClothesProducts = (name) => {
  return async (dispatch) => {
    try {
      const data = await fetchCategory(name);
      dispatch(setClothes(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setTechProducts = (name) => {
  return async (dispatch) => {
    try {
      const data = await fetchCategory(name);
      dispatch(setTech(data));
    } catch (e) {
      console.error(e);
    }
  };
};
