let express = require("express");
let OrderRoute = express.Router();

let {
  placeOrder,
  orderHistory,
  getOrderDetails,
} = require("../controller/order.controller");

OrderRoute.post("/order/place", placeOrder);
OrderRoute.get("/orders/history", orderHistory);
OrderRoute.get("/orders/:orderId", getOrderDetails);

module.exports = {
  OrderRoute,
};
