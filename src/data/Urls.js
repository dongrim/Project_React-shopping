import { DataTypes } from "../redux/constants/Types";

const protocol = "http";
const hostname = "localhost";
const port = 8010;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
};
