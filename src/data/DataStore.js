import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer.js";

export const SportsStoreDataStore = createStore(ShopReducer);
