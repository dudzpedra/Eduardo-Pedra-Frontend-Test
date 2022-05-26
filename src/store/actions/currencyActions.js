import { selectCurrency, setCurrencies } from "../../features/currencySlice";
import fetchCurrencies from "../../services/fetch-currencies";

export const getCurrencies = () => {
  return async (dispatch) => {
    try {
      const currencies = await fetchCurrencies();
      if (currencies) {
        dispatch(setCurrencies(currencies));
        dispatch(selectCurrency(0))
      }
    } catch (e) {
      console.error(e);
    }
  };
};

export const setCurrency = (payload) => {
  return (dispatch) => {
    try {
      dispatch(selectCurrency(payload));
    } catch (e) {
      console.error(e);
    }
  };
};
