let mongoose = require("mongoose");

let cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductModel",
    required: true,
  },
  quantity: {
    true: Number,
    default: 1,
  },
});

let cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    items: [cartItemSchema],
  },
  {
    versionKey: false,
  }
);

let CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
