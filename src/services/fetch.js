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

export const registerUser = async (user) => {
  try {
    console.log(user);
    const res = await axios.post("/api/user/register", user);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post("/api/user/login", user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.post("/api/user/logout");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const checkAuth = async () => {
  try {
    const res = await axios.post("/api/user/auth");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCart = async () => {
  try {
    const res = await axios.get("/api/orders/cart");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = async (id) => {
  try {
    const res = await axios.post(`/api/orders/cart/items/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateQtyCart = async (id, qty) => {
  try {
    const res = await axios.put(`/api/orders/cart/update/${id}`, { qty });
    console.log(res, "INSIDE UPDATE QTY");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = async (id) => {
  try {
    const res = await axios.delete(`/api/orders/cart/delete/${id}`);
    console.log(res, "INSIDE DELETE FETCH");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const checkoutCart = async () => {
  try {
    const res = await axios.post("/api/orders/cart/checkout");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getOrders = async () => {
  try {
    const res = await axios.post("/api/orders/");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
