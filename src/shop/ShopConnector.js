import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
} from "../data/CartActionCreators.js";
import { DataTypes } from "../data/Types";
import { withRouterShop as Shop } from "./Shop.js";
import { CartDetails } from "./CartDetails.js";

class ShopConnector extends Component {
  render() {
    return (
      <Routes>
        <Route path="products/*" element={<Shop {...this.props} />}>
          <Route path=":category" element={<Shop />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/shop/products" />} />
        <Route path="cart" element={<CartDetails {...this.props} />} />
      </Routes>
    );
  }

  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
    setTimeout(() => {
      console.log(this.props);
    }, 1000);
  }
}

const mapStateToProps = (dataStore) => ({ ...dataStore });
const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
