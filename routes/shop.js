const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Final Middleware.");
  res.send("<h1>This is homepage</h1>");
});

module.exports = router;
