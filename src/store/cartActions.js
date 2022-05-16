import { add } from "../features/cartSlice"

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(add(product))
  }
}