import React, { Component } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import Shop from "./Shop.js";

class ShopConnector extends Component {
  render() {
    return (
      <Routes>
        <Route path="products" element={<Shop {...this.props} />}>
          <Route path=":category" element={<Shop />} />
        </Route>
        <Route path="/" element={<Navigate replace to="/shop/products" />} />
      </Routes>
    );
  }

  componentDidMount() {
    console.log("fire redux!");
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }
}

const mapStateToProps = (dataStore) => {
  return { ...dataStore };
};
const mapDispatchToProps = {
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
