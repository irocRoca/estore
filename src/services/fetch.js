import axios from "axios";

export const getProductImages = async () => {
  const products = await axios.get("/api/products");
  return products.data.splice(0, 8);
};

export const getProducts = async () => {
  const products = await axios.get("/api/products");
  return products.data;
};

export const getProduct = async (id) => {
  const product = await axios.get(`/api/products/${id}`);
  return product.data;
};

export const getProductsByFilter = async (obj) => {
  const products = await axios.get("/api/product/filter", { params: { obj } });
  return products.data;
};
