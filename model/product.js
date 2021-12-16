const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  genre: String,
  country: { type: String, default: "Imported" },
  closure: String,
  care: { type: String, default: "Machine Wash" },
});

module.exports = mongoose.model("product", Product);
