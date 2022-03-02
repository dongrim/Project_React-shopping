import { DataTypes } from "../redux/constants/Types";

const protocol = "http";
const hostname = "localhost";
const port1 = 8010;
const port2 = 8011;

export const RestUrls = {
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port1}/api/categories`,
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port1}/api/products`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port1}/api/orders`,
};

export const GraphQlUrl = `${protocol}://${hostname}:${port2}/graphql`;
