import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  selectedImageIndex: 0,
  selectedAttributes: []
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
      state.selectedAttributes = []
    },
    selectImage(state, action) {
      state.selectedImageIndex = action.payload;
    },
    setAttribute(state, action) {
      const { attribute, itemId } = action.payload;

      const selectedItems = attribute.items.filter(
        (item) => item.id === itemId
      );

      const isSelectedAlready = state.selectedAttributes.find(
        (att) => att.id === attribute.id
      );

      if (isSelectedAlready) {
        state.selectedAttributes = state.selectedAttributes.filter(att => att.id !== attribute.id)
      }

      state.selectedAttributes.push({
        ...attribute,
        items: selectedItems,
      });
    },
  },
});

export const { setProduct, selectImage, setAttribute } = productSlice.actions;
export default productSlice.reducer;
