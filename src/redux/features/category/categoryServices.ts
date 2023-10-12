import axios from "axios";

// Get Categories
const getCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  
  return response.data;
};

const categoryServices = {
  getCategories,
};

export default categoryServices;