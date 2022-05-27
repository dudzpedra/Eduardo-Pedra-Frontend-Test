const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: [0, 0, 0, 0, 0],
  quantity: 0,
  pricesIndex: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = { ...action.payload, imgIndex: 0 };
      const isAlreadyOnCart = state.items.find(
        (item) => item.id === newItem.id
      );

      if (isAlreadyOnCart) isAlreadyOnCart.quantity++;
      if (!isAlreadyOnCart) state.items.push(newItem);

      state.quantity++;
      state.total = state.total.map(
        (value, index) => (value += newItem.prices[index].amount)
      );
    },
    remove(state, action) {
      const idToRemove = action.payload;
      const isAlreadyOnCart = state.items.find(
        (item) => item.id === idToRemove
      );

      if (isAlreadyOnCart.quantity === 1)
        state.items = state.items.filter((item) => item.id !== idToRemove);
      if (isAlreadyOnCart.quantity > 1) isAlreadyOnCart.quantity--;

      state.quantity--;
      state.total = state.total.map((value, index) => {
        value -= isAlreadyOnCart.prices[index].amount;
        if (value < 0) value = 0;
        return value;
      });
    },
    setPriceIndex(state, action) {
      state.pricesIndex = action.payload;
    },
    setImageIndex(state, action) {
      const { imgIndex, id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) itemToUpdate.imgIndex = imgIndex;
    },
  },
});

export const { add, remove, setPriceIndex, setImageIndex } = cartSlice.actions;
export default cartSlice.reducer;
