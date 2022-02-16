import { createStore, applyMiddleware, combineReducers } from "redux";
import { ShopReducer } from "../reducers/ShopReducer.js";
import { CartReducer } from "../reducers/CartReducer.js";
import { CommonReducer } from "../reducers/CommonReducer";
import { asyncActions } from "../../data/AsyncMiddleware";
import { createLogger } from "redux-logger";

// const logger = createLogger({});

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
  // applyMiddleware(asyncActions, logger)
);
