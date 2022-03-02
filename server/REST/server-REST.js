const express = require("express");
const app = express();
const port = process.env.PORT || 8010;
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const { products, categories } = require("../db/chance");
const db = require("../db/chance");
const chokidar = require("chokidar");

const corsOptions = {
  origin: "*",
  credentials: true,
  exposedHeaders: ["X-Total-Count"],
};

const myLogger = (req, res, next) => {
  // chokidar.watch("../db/chance.js").on("all", (event, path) => {
  //   console.log("==>", "event: ", event);
  //   console.log("==>", "path: ", path);
  // });
  console.log("==============================");
  console.log("req.params: ", req.params);
  console.log("originalUrl: ", req.originalUrl);
  console.log("req.query: ", req.query);
  next();
};

app.use(cors(corsOptions));
// app.use(cookieParser());
app.use("/api/products", myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://localhost:8010/api/products?category_like=watersports&_page=2&_limit=3&_sort=name

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

let orderObj = {};
let orders = [];
let id;

app.post("/api/orders", (req, res) => {
  if (orders.length === 0) {
    id = 1;
  } else {
    id++;
  }
  orderObj = {
    orders_summary: {
      totalSize: orders.length + 1,
      orders,
    },
  };
  orders.push({
    id,
    ...req.body,
    shipped: false,
  });
  res.send(orderObj);
  console.dir(orderObj);
});

app.get("/api/orders", (req, res) => {
  // res.send(orderObj);
  res.send(db.orders);
});

app.listen(port, () => console.log("Server is running on PORT: %d", port));
