const Chance = require("chance");
const chance = new Chance();

const categories = ["Watersports", "Soccer", "Chess", "Running"];
const products = [];

for (let i = 1; i <= 503; i++) {
  const ran = Math.floor(chance.random() * 4);
  products.push({
    id: i,
    name: chance.animal({ type: "ocean" }),
    category: categories[ran],
    description: `${categories[ran]}: ${chance.sentence({ words: ran + 2 })}`,
    price: chance.floating({ min: 50, max: 990, fixed: 0 }),
  });
}

const orders = [];

for (let i = 1; i <= 103; i++) {
  orders.push({
    id: i,
    name: chance.name(),
    email: chance.email({ domain: "gmail.com" }),
    address: chance.address(),
    city: chance.city(),
    zip: chance.zip(),
    country: chance.country({ full: true }),
    products: createProduct(),
    shipped: chance.bool({ likelihood: 40 }),
  });
}

function createProduct() {
  const orderProducts = [];
  const len = chance.integer({ min: 1, max: 5 });
  for (let i = 1; i <= len; i++) {
    orderProducts.push({
      product: { price: chance.floating({ min: 50, max: 990, fixed: 0 }) },
      quantity: chance.integer({ min: 1, max: 10 }),
    });
  }
  return orderProducts;
}

module.exports = { categories, products, orders };
