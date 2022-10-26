// To fetch files from other directories we need path module
const path = require("path");
const express = require("express");

const rootDir = require("../helpers/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Final Middleware.");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
