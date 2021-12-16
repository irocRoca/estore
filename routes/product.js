const router = require("express").Router();
const productController = require("../controller/product");

router.get("/:id", productController.getProduct);
router.get("/", productController.getProducts);

module.exports = router;
