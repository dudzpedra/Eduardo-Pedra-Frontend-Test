import client from "../utils/client";
import GET_TECH from '../api/operations/get-tech'

const fetchTechProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_TECH,
    });
    if (data) {
      return data.category
    }
  } catch (e) {
    console.error(e);
  }
};

export default fetchTechProducts