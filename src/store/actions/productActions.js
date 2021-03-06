import { selectImage, setAttribute, setProduct } from '../../features/productSlice'
import fetchProduct from '../../services/fetch-product'

export const getProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetchProduct(id)
      dispatch(setProduct(data))
    } catch (e) {
      console.error(e);
    }
  }
}

export const setImageIndex = (id) => {
  return (dispatch) => {
    dispatch(selectImage(id))
  }
}

export const selectAttribute = (payload) => {
  return (dispatch) => {
    try {
      dispatch(setAttribute(payload));
    } catch (e) {
      console.error(e);
    }
  };
};