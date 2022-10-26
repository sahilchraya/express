// import http core modules
// const http = require("http");
// HTTP library is not required when using express to create server.

// import express from the nodeModules
const express = require("express");

// import bodyParser Package
const bodyParser = require("body-parser");

//import express as a function and save as a constant named app
const app = express();

//use function allow to create a middleware.
// Use takes three arguments Request Response and NextRequest
// app.use((req, res, next) => {
//   console.log("In the Middleware.");
//   next(); // Allows the request to go to the next middleware after this line
//   //Or to a spesified middleware f located elseware.
// });

// // Use Response to stop the funnel.
// app.use((req, res, next) => {
//   console.log("In the next Middleware.");
//   // res.send allow to send any type of request to the browser.
//   res.send("<h1>Hey! Sorry it took a while</h1>");
// });

// create server using the http module and configure it to listen at port 3000.
// use app as the request handler as its the express function.
// const server = http.createServer(app);
// server.listen(3000);

// Use body parser for all the urls.
app.use(bodyParser.urlencoded({ extended: false }));

//app.use accepts both post and get requests .
app.use("/", (req, res, next) => {
  console.log("This is a middleware that always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Add Product Middleware");
  res.send(
    '<html><form action="/product" method="POST"><input type="text" name="product-name"></input><button type="submit">Add Product</button></form></html>'
  );
});

// app.post only accespts post requests .
app.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log("Product in above line is added");
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Final Middleware.");
  res.send("<h1>This is homepage</h1>");
  next();
});

// Create server using express
app.listen(3000);
