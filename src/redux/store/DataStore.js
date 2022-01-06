import { createStore } from "redux";
import { ShopReducer } from "../reducers/ShopReducer.js";
import { CartReducer } from "../reducers/CartReducer.js";
import { CommonReducer } from "../reducers/CommonReducer";

// export const SportsStoreDataStore = createStore(
//   CommonReducer(ShopReducer, CartReducer)
// );
export const SportsStoreDataStore = (() => {
  console.log("#createStore");
  return createStore(CommonReducer(ShopReducer, CartReducer));
})();
