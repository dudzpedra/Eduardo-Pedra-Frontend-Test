import GET_ALL_PRODUCTS from "../api/operations/get-all-products";
import client from "../utils/client";

const fetchAllProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_PRODUCTS,
    });
    if (data) {
      return data.category
    }
  } catch (e) {
    console.error(e);
  }
};

export default fetchAllProducts