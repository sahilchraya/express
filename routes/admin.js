// To fetch files from other directories we need path module
const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../helpers/path");

router.get("/add-product", (req, res, next) => {
  console.log("Add Product Middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// app.post only accespts post requests .
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log("Product in above line is added");
  res.redirect("/");
});

module.exports = router;
