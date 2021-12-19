const router = require("express").Router();
const orderCtrl = require("../controller/order");

router.get("/cart", orderCtrl.getCart);
router.post("/cart/items/:id", orderCtrl.addToCart);
router.post("/cart/checkout", orderCtrl.cartCheckout);
router.put("/cart/update/:id", orderCtrl.updateItemQty);
router.delete("/cart/delete/:id", orderCtrl.deleteItem);

module.exports = router;
