const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: 0,
  quantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload
      const alreadyOnCart = state.items.find(item => item.id === newItem.id)
      if (alreadyOnCart) {
        alreadyOnCart.quantity++
        alreadyOnCart.totalPrice += newItem.prices.amount
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.prices.amount
        })
        state.quantity++
      }
      state.total += newItem.prices.amount
    },
    remove(state, action) {
      const idToRemove = action.payload
      const alreadyOnCart = state.items.find(item => item.id === idToRemove)
      if (alreadyOnCart.quantity === 1) {
        state.items = state.items.filter(item => item.id !== idToRemove)
        state.quantity--
      } else {
        alreadyOnCart.quantity--
        alreadyOnCart.totalPrice -= alreadyOnCart.prices.amount
      }
      state.total -= alreadyOnCart.prices.amount
    }
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
