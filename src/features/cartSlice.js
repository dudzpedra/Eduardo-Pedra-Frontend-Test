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

      const alreadyOnCart = state.items.find((item) => item.id === newItem.id);

      if (alreadyOnCart) {
        alreadyOnCart.quantity++;
      } else {
        state.items.push(newItem);
        //try to implement total.fill to fill with 0 and use prices length
      }
      state.total = state.total.map(
        (value, index) => (value += newItem.prices[index].amount)
      );
      state.quantity++;
    },
    remove(state, action) {
      const idToRemove = action.payload;
      const alreadyOnCart = state.items.find((item) => item.id === idToRemove);
      if (alreadyOnCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== idToRemove);
      } else {
        alreadyOnCart.quantity--;
      }
      state.total = state.total.map((value, index) => {
        value -= alreadyOnCart.prices[index].amount;
        if (value < 0) value = 0
        return value
      });
      state.quantity--;
    },
    setPriceIndex(state, action) {
      state.pricesIndex = action.payload;
    },
    setImageIndex(state, action) {
      const { imgIndex, id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.imgIndex = imgIndex;
      }
    },
  },
});

export const { add, remove, setPriceIndex, setImageIndex } = cartSlice.actions;
export default cartSlice.reducer;
