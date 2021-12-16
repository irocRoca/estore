const router = require("express").Router();
const orderCtrl = require("../controller/order");
const { verifyAuth } = require("../middleware/auth");

router.get("/cart", verifyAuth, orderCtrl.getCart);
router.post("/cart/items/:id", verifyAuth, orderCtrl.addToCart);
// router.post("/cart/add", orderCtrl.addItem);
// router.put("/cart/update/:id", orderCtrl.updateItemQty);
// router.delete("/cart/delete/:id", orderCtrl.deleteItem);

module.exports = router;
