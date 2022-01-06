import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SportsStoreDataStore } from "./redux/store/DataStore";
import ShopConnector from "./shop/ShopConnector";

export default class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Routes>
            <Route path="shop/*" element={<ShopConnector />} />
            <Route path="/" element={<Navigate replace to="/shop" />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}
