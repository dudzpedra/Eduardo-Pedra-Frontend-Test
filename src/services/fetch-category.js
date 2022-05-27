import GET_CATEGORY from "../api/operations/get-category";
import client from "../utils/client";

const fetchCategory = async (name) => {
  try {
    const { data } = await client.query({
      query: GET_CATEGORY,
      variables: name,
    });
    if (data) return data.category;
  } catch (e) {
    console.error(e);
  }
};

export default fetchCategory;
