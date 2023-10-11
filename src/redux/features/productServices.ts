import axios from "axios";

// Get products
const getProducts = async () => {
  const response = await axios.get(
    "https://dummyjson.com/products?limit=10"
  );
  return response.data.products;
};

// Get product by id
const getProductById = async (id: string) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

const productServices = {
  getProducts,
  getProductById,
};

export default productServices;
