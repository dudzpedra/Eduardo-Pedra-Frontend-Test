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
      console.log(action.payload);
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
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
