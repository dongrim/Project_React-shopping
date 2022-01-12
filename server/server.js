const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const cors = require("cors");
const { products, categories } = require("./db/chance.js");

app.use(cors());

// pagenamtion (p.209)
// http://localhost:8010/api/products?category_like=watersports&_page=2&_limit=3&_sort=name
// http://localhost:8010/api/products?_page=2&_limit=3

app.get("/api/products", (req, res) => {
  console.log("req.params: ", req.params);
  console.log("originalUrl: ", req.originalUrl);
  console.log("req.query: ", req.query);
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
