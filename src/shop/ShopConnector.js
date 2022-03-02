import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loadData, placeOrder } from "../redux/actions/ActionCreators";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
} from "../redux/actions/CartActionCreators";
import { DataTypes } from "../redux/constants/Types";
import { withRouterShop as Shop } from "./Shop";
import { withRouterDataGetter as DataGetter } from "../data/DataGetter";
import { withRouterCartDetails as CartDetails } from "./CartDetails";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";

const mapStateToProps = (dataStore) => ({ ...dataStore });

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  placeOrder,
};

class ShopConnector extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="products/*"
          element={
            <DataGetter {...this.props}>
              <Shop {...this.props} />
            </DataGetter>
          }
        >
          <Route path=":category/*" element={<Shop />} />
          <Route path=":category/:page/*" element={<Shop />} />
        </Route>
        <Route path="/" element={<Navigate to="/shop/products/all" />} />
        <Route path="cart" element={<CartDetails {...this.props} />} />
        <Route path="checkout" element={<Checkout {...this.props} />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    );
  }

  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    // this.props.loadData(DataTypes.PRODUCTS);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
