import axios from "axios";

// Get Categories
const getCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");

  return response.data;
};

const getCategoryByname = async (name: string) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${name}`
  );
  return response.data;
};

const categoryServices = {
  getCategories,
  getCategoryByname,
};

export default categoryServices;
