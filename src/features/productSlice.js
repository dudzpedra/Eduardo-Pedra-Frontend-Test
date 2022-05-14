import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  selectedImageIndex: 0
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload
    },
    selectImage(state, action) {
      state.selectedImageIndex = action.payload
    }
  }
})

export const { setProduct, selectImage } = productSlice.actions
export default productSlice.reducer