import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { ShopReducer } from "../reducers/ShopReducer.js";
import { CartReducer } from "../reducers/CartReducer.js";
import { CommonReducer } from "../reducers/CommonReducer";
import { asyncActions } from "../../data/AsyncMiddleware";

const logger = createLogger({});

// export const SportsStoreDataStore = createStore(
//   CommonReducer(ShopReducer, CartReducer)
// );
export const SportsStoreDataStore = (() => {
  console.log("#createStore");
  return createStore(
    CommonReducer(ShopReducer, CartReducer),
    applyMiddleware(asyncActions)
    // applyMiddleware(asyncActions, logger)
  );
})();
