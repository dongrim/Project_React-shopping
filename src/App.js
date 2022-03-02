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
import Admin from "./admin/Admin";

export default class App extends Component {
  render() {
    return (
      <Provider store={SportsStoreDataStore}>
        <Router>
          <Routes>
            {/* <Route index element={<div>index page</div>} /> */}
            <Route path="admin" element={<Admin />} />
            <Route path="shop/*" element={<ShopConnector />} />
            <Route path="/" element={<Navigate replace to="/shop" />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}
