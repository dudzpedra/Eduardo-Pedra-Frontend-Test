import client from "../utils/client";
import GET_CURRENCIES from '../api/operations/get-currencies'

const fetchCurrencies = async () => {
  try {
    const { data } = await client.query({
      query: GET_CURRENCIES
    })
    if (data) {
      return data.currencies
    }
  } catch (e) {
    console.error(e);
  }
}

export default fetchCurrencies