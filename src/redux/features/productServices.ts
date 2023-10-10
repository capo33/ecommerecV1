import axios from "axios";

// Get products
const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products?limit=10");
  return response.data;
}

const productServices = {
  getProducts
}

export default productServices;