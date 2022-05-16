import { add, remove } from "../features/cartSlice"

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch(add(product))
  }
}

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch(remove(id))
  }
}