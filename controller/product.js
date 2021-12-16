const Product = require("../model/product");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const docs = await Product.find();
      return res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ message: "Unable to get products" });
    }
  },

  getProduct: async (req, res) => {
    try {
      console.log(req.params.id);
      const doc = await Product.findById({ _id: req.params.id });
      return res.status(200).json(doc);
    } catch (err) {
      return res.json({ message: "Unable to find product" });
    }
  },
};
