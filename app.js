// import express from the nodeModules
const express = require("express");
// import bodyParser Package
const bodyParser = require("body-parser");

// import admin routes file
const adminRoutes = require("./routes/admin");
// import admin routes file
const shopRoutes = require("./routes/shop");

//import express as a function and save as a constant named app
const app = express();

// Use body parser for all the urls.
app.use(bodyParser.urlencoded({ extended: false }));

// //app.use accepts both post and get requests .
// app.use("/", (req, res, next) => {
//   console.log("This is a middleware that always runs");
//   next();
// });
// Admin routes. "/admin" is the prefix for all the admin routes.
app.use("/admin", adminRoutes);

// Shop routes
app.use(shopRoutes);

// 404 Page Route
app.use((req, res, next) => {
  res.status(404).send("<h1>You seem to be lost. Can i help?</h1>");
});

// Create server using express
app.listen(3000);
