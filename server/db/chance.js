const Chance = require("chance");
const chance = new Chance();

module.exports = (() => {
  const products = [];
  const categories = ["Watersports", "Soccer", "Chess", "Running"];

  for (var i = 0; i < 503; i++) {
    const ran = Math.floor(chance.random() * 4);
    products.push({
      id: i,
      name: chance.animal({ type: "ocean" }),
      category: categories[ran],
      description: `${categories[ran]}: ${chance.sentence({ words: ran + 2 })}`,
      price: chance.floating({ min: 50, max: 990, fixed: 0 }),
    });
  }

  return { products, categories };
})();
