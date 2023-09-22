let express = require("express");
let CategoryRoute = express.Router();

let {
  getCategories,
  createCatrgory,
} = require("../controller/category.controller");

CategoryRoute.get("/categories", getCategories);
CategoryRoute.post("/categories", createCatrgory);

module.exports = {
  CategoryRoute,
};
