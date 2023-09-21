let mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryModel",
      reruired: true,
    },
  },
  {
    versionKey: false,
  }
);

let ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
