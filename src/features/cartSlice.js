const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  total: [0, 0, 0, 0, 0],
  quantity: 0,
  pricesIndex: 0,
  selectedAttributes: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload
      console.log('item received to cart:', newItem);
      const alreadyOnCart = state.items.find(item => item.id === newItem.id)
      if (alreadyOnCart) {
        alreadyOnCart.quantity++
      } else {
        const itemToAdd = {
          ...newItem,
          quantity: 1,
          selectedAttributes: state.selectedAttributes
        } 
        console.log('item to add: ', itemToAdd);
        state.items.push(itemToAdd)
        //try to implement total.fill to fill with 0 and use prices length
      }
      state.total = state.total.map((value, index) => value += newItem.prices[index].amount)
      state.quantity++
    },
    remove(state, action) {
      const idToRemove = action.payload
      const alreadyOnCart = state.items.find(item => item.id === idToRemove)
      if (alreadyOnCart.quantity === 1) {
        state.items = state.items.filter(item => item.id !== idToRemove)
      } else {
        alreadyOnCart.quantity--
      }
      state.total = state.total.map((value, index) => value -= alreadyOnCart.prices[index].amount)
      state.quantity--
    },
    setPriceIndex(state, action) {
      state.pricesIndex = action.payload
    },
    setAttributes(state, action) {
      state.selectedAttributes.push(action.payload)
    }
  },
});

export const { add, remove, setPriceIndex, setAttributes } = cartSlice.actions;
export default cartSlice.reducer;
