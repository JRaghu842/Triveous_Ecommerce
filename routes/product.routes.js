let express = require("express");
let ProductRouter = express.Router();
let { ProductModel } = require("../models/product.model");
let { CategoryModel } = require("../models/category.model");

// GET All products based on category

ProductRouter.get("/products/:categoryId", async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    let isCategoryExists = await CategoryModel.findById(categoryId);

    if (!isCategoryExists) {
      return res.status(404).send({ msg: "Category not found" });
    }

    let products = await ProductModel.find({ category: categoryId });

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({
      msg: "Cannot get products based on CategoryId",
      error: error.message,
    });
  }
});

// GET individual product details

ProductRouter.get("/product/:productId", async (req, res) => {
  try {
    let productId = req.params.productId;
    let product = await ProductModel.findById(productId);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    res.status(200).send(product);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Cannot able to find Product", error: error.message });
  }
});

//POST a new product

ProductRouter.post("/products", async (req, res) => {
  try {
    let { title, price, description, availability, categoryId } = req.body;

    if (!title || !price || !description || !availability || !categoryId) {
      return res.status(400).send({ msg: "All fields are required" });
    }

    let category = await CategoryModel.findById(categoryId);

    if (!category) {
      return res.status(404).send({ msg: "Category not found" });
    }

    let newProduct = new ProductModel({
      title,
      price,
      description,
      availability,
      category: categoryId,
    });

    await newProduct.save();

    res.status(201).send({ msg: "Product created successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "cannot able to post new product", error: error.message });
  }
});

module.exports = {
  ProductRouter,
};
