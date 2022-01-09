const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const cors = require("cors");
const items = require("./db/items.json");
// const foo = require("./db/faker.js");
const chance = require("chance").Chance(50);
console.log(chance.random());
console.log(chance.string());

app.use(cors());

app.get("/api/products", (req, res) => {
  const allProducts = [];
  for (product in items) {
    allProducts.push(...items[product]);
  }
  const response = {
    status: 200,
    products: allProducts,
  };
  res.send(response);
});
app.get("/api/categories", (req, res) => {
  const categories = [];
  for (cat in items) {
    categories.push(cat);
  }
  const response = {
    status: 200,
    categories,
  };
  res.send(response);
});
app.get("/api/products/:id", (req, res) => {
  const response = {
    response: 200,
    products: items[req.params.id],
  };
  res.send(response);
});

app.listen(port, () => console.log("Server is running on PORT: %d", port));
