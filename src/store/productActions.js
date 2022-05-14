import { selectImage, setProduct } from '../features/productSlice'
import fetchProduct from '../services/fetch-product'

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
    console.log('selected image id: ', id);
    dispatch(selectImage(id))
  }
}