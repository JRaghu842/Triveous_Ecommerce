let express = require("express");
let ProductRouter = express.Router();

let {
  getProductByCategory,
  getProductDetails,
  createProduct,
} = require("../controller/product.controller");

ProductRouter.get("/products/:categoryId", getProductByCategory);
ProductRouter.get("/product/:productId", getProductDetails);
ProductRouter.post("/products", createProduct);

module.exports = {
  ProductRouter,
};
