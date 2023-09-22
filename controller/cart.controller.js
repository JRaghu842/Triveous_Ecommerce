let { ProductModel } = require("../models/product.model");
let { CartModel } = require("../models/cart.model");

// POST a product to the user's cart
let addProductToUserCart = async (req, res) => {
  try {
    let { userId } = req.user_data;
    let productId = req.params.productId;
    let { quantity } = req.body;

    let product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      cart = new CartModel({
        user: userId,
        items: [],
      });
    }

    let existingItem = cart.items.find((item) =>
      item.product.equals(productId)
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity,
      });
    }

    await cart.save();

    res.status(200).send({ msg: "Product added to the cart", cart });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot able to add Product to cart",
      error: error.message,
    });
  }
};

// GET all the products in user's cart
let getAllProductsInCart = async (req, res) => {
  try {
    let { userId } = req.user_data;

    let cart = await CartModel.findOne({ user: userId }).populate({
      path: "items.product",
      model: ProductModel,
    });

    if (!cart) {
      return res
        .status(200)
        .send({ msg: "Cart is empty", cart: { items: [] } });
    }

    res.status(200).send({ cart });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot able to get Products from cart",
      error: error.message,
    });
  }
};

// PUT/Update the quantity of a product in the cart
let updateProductInCart = async (req, res) => {
  try {
    let { userId } = req.user_data;
    let cartItemId = req.params.cartItemId;
    let { quantity } = req.body;

    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    let cartItem = cart.items.find((item) => item._id.equals(cartItemId));

    if (!cartItem) {
      return res.status(404).send({ msg: "Cart item not found" });
    }

    cartItem.quantity = quantity;

    await cart.save();

    res.status(200).send({ msg: "Cart item quantity updated", cart });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Cannot able to update Products in cart",
      error: error.message,
    });
  }
};

// DELETE: Remove a product from the cart
let removeProductInCart = async (req, res) => {
  try {
    let { userId } = req.user_data;
    let cartItemId = req.params.cartItemId;

    let cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).send({ msg: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => !item._id.equals(cartItemId));

    await cart.save();

    res.status(200).send({ msg: "Cart item removed", cart });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Cannot able to delete Products in cart",
      error: error.message,
    });
  }
};

module.exports = {
  addProductToUserCart,
  getAllProductsInCart,
  updateProductInCart,
  removeProductInCart,
};
