import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  selectedCurrency: {},
  selectedIndex: 0
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.currencies = action.payload
    },
    selectCurrency(state, action) {
      state.selectedIndex = action.payload
      state.selectedCurrency = state.currencies[action.payload]
    }
  },
});

export const { setCurrencies, selectCurrency } = currencySlice.actions;

export default currencySlice.reducer;
