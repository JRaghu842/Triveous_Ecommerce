let mongoose = require("mongoose");

let categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

let CategoryModel = mongoose.model("category", categorySchema);

module.exports = {
  CategoryModel,
};
