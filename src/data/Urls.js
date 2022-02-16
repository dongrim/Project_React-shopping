import { DataTypes } from "../redux/constants/Types";

const protocol = "http";
const hostname = "localhost";
const port = 8010;

export const RestUrls = {
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
};
