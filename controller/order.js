// router.get("/cart", orderCtrl.getCart);
// router.post("/cart/items/:id", orderCtrl.addToCart);
// router.post("/cart/add", orderCtrl.addItem);
// router.put("/cart/update/:id", orderCtrl.updateItemQty);
// router.delete("/cart/delete/:id", orderCtrl.deleteItem);

const Order = require("../model/order");
const Product = require("../model/product");

module.exports.getCart = async (req, res) => {
  console.log(req.user);
  if (req.user != null) {
    const cart = await Order.getCart(req.user.id);
    return res.json(cart);
  }
  res.send(null);
};

module.exports.addToCart = async (req, res) => {
  // get the cart
  const cart = await Order.getCart(req.user.id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
};
