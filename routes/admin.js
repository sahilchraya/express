// To fetch files from other directories we need path module
const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../helpers/path");

// Create a variable to store the product
const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// app.post only accespts post requests .
router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

// module.exports = router;
// for exporting multiple data objects.
exports.routes = router;
exports.products = products;
