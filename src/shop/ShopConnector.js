import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../redux/actions/ActionCreators.js";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
} from "../redux/actions/CartActionCreators.js";
import { DataTypes } from "../redux/constants/Types.js";
import { withRouterShop as Shop } from "./Shop.js";
import { CartDetails } from "./CartDetails.js";
import { withRouterDataGetter as DataGetter } from "../data/DataGetter.js";

const mapStateToProps = (dataStore) => ({ ...dataStore });

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
};

class ShopConnector extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route
            path="products/*"
            element={
              <DataGetter {...this.props}>
                <Shop {...this.props} />
              </DataGetter>
            }
          >
            <Route path=":category" />
            <Route path=":category/:page" />
          </Route>
          <Route path="/" element={<Navigate to="/shop/products" replace />} />
          <Route path="cart" element={<CartDetails {...this.props} />} />
        </Routes>
        {/* <Navigate to="/shop/jojo" replace /> */}
      </>
    );
  }

  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
