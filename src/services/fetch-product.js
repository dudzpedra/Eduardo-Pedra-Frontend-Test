import client from "../utils/client";
import GET_PRODUCT from '../api/operations/get-product'

const fetchProduct = async (id) => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCT,
      variables: { id: id }
    })
    if (data) {
      return data.product
    }
  } catch (e) {
    console.error(e);
  }
}

export default fetchProduct