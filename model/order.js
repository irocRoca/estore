const mongoose = require("mongoose");
const product = require("./product").schema;

const lineItemSchema = new mongoose.Schema(
  {
    qty: { type: Number, default: 1 },
    item: product,
  },
  {
    toJSON: { virtuals: true },
  }
);

lineItemSchema.virtual("extPrice").get(function () {
  return this.qty * this.item.price;
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
    // Could put a orderNumber
    //Payment, shipping adress
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

orderSchema.virtual("orderTotal").get(function () {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("totalQty").get(function () {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    {
      user: userId,
      isPaid: false,
    },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;

  const lineItem = cart.lineItems.find((lineItem) =>
    lineItem.item._id.equals(itemId)
  );
  if (lineItem) {
    console.log(lineItem, "Iitem");
    lineItem.qty += 1;
  } else {
    try {
      const item = await mongoose.model("product").findById(itemId);
      cart.lineItems.push({ item });
    } catch (err) {
      console.log("here", err);
    }
  }

  return cart.save();
};

module.exports = mongoose.model("Order", orderSchema);
