let currency = {
  bitcoin: 7000,
  dogecoin: 14,
};

module.exports = {
  buy: (coin, qty) => {
    switch (coin) {
      case "bitcoin":
        return qty * currency[coin];
      case "dogecoin":
        return qty * currency[coin];
      default:
        return console.error(
          `There is no "${coin}" in database. Check the name of coin again.`
        );
    }
  },
};
