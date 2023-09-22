let express = require("express");
let CartRoute = express.Router();

let {
  addProductToUserCart,
  getAllProductsInCart,
  updateProductInCart,
  removeProductInCart,
} = require("../controller/cart.controller");

CartRoute.post("/cart/add/:productId", addProductToUserCart);
CartRoute.get("/cart", getAllProductsInCart);
CartRoute.put("/cart/update/:cartItemId", updateProductInCart);
CartRoute.delete("/cart/remove/:cartItemId", removeProductInCart);

module.exports = {
  CartRoute,
};
