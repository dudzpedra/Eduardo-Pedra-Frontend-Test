import { setCategories, setCategory } from "../../features/categorySlice";
import fetchCategories from "../../services/fetch-categories";
import fetchCategory from "../../services/fetch-category";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const data = await fetchCategories();
      dispatch(setCategories(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const getCategory = (name) => {
  return async (dispatch) => {
    try {
      const data = await fetchCategory(name);
      dispatch(setCategory(data));
    } catch (e) {
      console.error(e);
    }
  };
};