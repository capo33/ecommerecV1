import axios from "axios";

// Get limit products
const getlimitProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=10");
  return response.data.products;
};

// Get all products
const getAllProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
};
// Get product by id
const getProductById = async (id: string) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

const productServices = {
  getlimitProducts,
  getAllProducts,
  getProductById,
};

export default productServices;
