// To fetch files from other directories we need path module
const path = require("path");
const express = require("express");
const adminData = require("./admin");
const rootDir = require("../helpers/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
