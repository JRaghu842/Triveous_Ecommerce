let { CategoryModel } = require("../models/category.model");

// GET list of all categories
let getCategories = async (req, res) => {
  try {
    let categories = await CategoryModel.find();
    res.status(200).send(categories);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Cannot get list of categories", error: error.message });
  }
};

// POST a new calegory
let createCatrgory = async (req, res) => {
  try {
    let { name } = req.body;

    if (!name) {
      return res.status(400).send({ msg: "Category name is required" });
    }

    let existingCategory = await CategoryModel.findOne({ name });

    if (existingCategory) {
      return res.status(400).send({ msg: "Category already exists" });
    }

    let newCategory = new CategoryModel({ name });
    await newCategory.save();

    res.status(200).send({ msg: "Category created successfully" });
  } catch (error) {
    res.status(500).send({
      msg: "Cannot able to create new category",
      error: error.message,
    });
  }
};

module.exports = {
  getCategories,
  createCatrgory,
};
