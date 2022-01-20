const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { products, categories } = require("./db/chance.js");

const corsOptions = {
  origin: "*",
  credentials: true,
  exposedHeaders: ["X-Total-Count"],
};

const myLogger = (req, res, next) => {
  console.log("==============================");
  console.log("req.params: ", req.params);
  console.log("originalUrl: ", req.originalUrl);
  console.log("req.query: ", req.query);
  next();
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(myLogger);

// http://localhost:8010/api/products?category_like=watersports&_page=2&_limit=3&_sort=name
// http://localhost:8010/api/products?_page=2&_limit=3

app.get("/api/products", (req, res) => {
  res.set("X-Total-Count", products.length);
  const response = {
    status: 200,
    products,
  };
  res.send(response);
});

app.get("/api/categories", (req, res) => {
  const response = {
    status: 200,
    categories,
  };
  res.send(response);
});
// app.get("/api/:id", (req, res) => {
// app.get("/api/products", (req, res) => {
// });

app.listen(port, () => console.log("Server is running on PORT: %d", port));
