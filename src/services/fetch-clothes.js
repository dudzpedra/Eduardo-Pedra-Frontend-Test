import GET_CLOTHES from "../api/operations/get-clothes";
import client from "../utils/client";

const fetchClothesProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_CLOTHES,
    });
    if (data) {
      return data.category
    }
  } catch (e) {
    console.error(e);
  }
};

export default fetchClothesProducts