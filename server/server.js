const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const cors = require("cors");
const items = require("./db/items.json");

app.use(cors());

app.get("/shop/products", (req, res) => {
  const response = {
    response: 200,
    products: items,
  };
  res.send(response);
});
app.get("/shop/products/:id", (req, res) => {
  const response = {
    response: 200,
    products: items[req.params.id],
  };
  res.send(response);
});

app.listen(port, () => console.log("Server is running on PORT: %d", port));
