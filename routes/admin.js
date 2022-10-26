const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("Add Product Middleware");
  res.send(
    '<html><form action="/admin/add-product" method="POST"><input type="text" name="product-name"></input><button type="submit">Add Product</button></form></html>'
  );
});

// app.post only accespts post requests .
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log("Product in above line is added");
  res.redirect("/");
});

module.exports = router;
