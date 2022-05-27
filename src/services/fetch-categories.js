import GET_CATEGORIES from "../api/operations/get-categories";
import client from "../utils/client";

const fetchCategories = async (name) => {
  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
    });
    if (data) return data.categories;
  } catch (e) {
    console.error(e);
  }
};

export default fetchCategories;
