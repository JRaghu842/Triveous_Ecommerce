let { CartModel } = require("../models/cart.model");
let { OrderModel } = require("../models/order.model");
let { ProductModel } = require("../models/product.model");

// POST an order
let placeOrder = async (req, res) => {
  try {
    const { userId } = req.user_data;
    const cart = await CartModel.findOne({ user: userId }).populate({
      path: "items.product",
      model: ProductModel,
    });

    if (!cart || !cart.items.length) {
      return res.status(400).send({
        msg: "Cart is empty. Add items to the cart before placing an order.",
      });
    }

    const totalPrice = cart.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    const order = new OrderModel({
      user: userId,
      items: cart.items.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      totalPrice,
    });

    await order.save();
    await cart.updateOne({ items: [] });

    res.status(200).send({ msg: "Order placed successfully", order });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot place an order",
      error: error.message,
    });
  }
};

// GET Order history for authenticated users
let orderHistory = async (req, res) => {
  try {
    const { userId } = req.user_data;
    const orders = await OrderModel.find({ user: userId });

    if (!orders || !orders.length) {
      return res
        .status(200)
        .send({ msg: "No order history found", orders: [] });
    }

    res.status(200).send({ orders });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot fetch order history",
      error: error.message,
    });
  }
};

// GET: Order details by order ID
let getOrderDetails = async (req, res) => {
  try {
    const { userId } = req.user_data;
    const orderId = req.params.orderId;
    const order = await OrderModel.findOne({
      _id: orderId,
      user: userId,
    }).populate({
      path: "items.product",
      model: ProductModel,
    });

    if (!order) {
      return res.status(404).send({ msg: "Order not found" });
    }

    res.status(200).send({ order });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot fetch order details",
      error: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  orderHistory,
  getOrderDetails,
};
