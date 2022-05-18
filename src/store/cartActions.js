import { add, remove, setAttributes, setPriceIndex } from "../features/cartSlice"

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

export const setIndex = (payload) => {
  return (dispatch) => {
    try {
      dispatch(setPriceIndex(payload));
    } catch (e) {
      console.error(e);
    }
  };
};

export const selectAttribute = (payload) => {
  return (dispatch) => {
    try {
      dispatch(setAttributes(payload));
    } catch (e) {
      console.error(e);
    }
  };
};