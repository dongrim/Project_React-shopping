import React, { Component } from "react";
import { DataTypes } from "../redux/constants/Types.js";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return <WrappedComponent {...props} params={params} />;
};

class DataGetter extends Component {
  render() {
    console.warn("DataGetter => ", this.props);
    return <>{this.props.children}</>;
  }

  componentDidMount = () => this.getData();
  componentDidMount = () => this.getData();

  getData() {
    const dsData = this.props.products_params || {};
    const rtData = {
      category_like:
        this.props.params.category === "all" ? "" : this.props.params.category,
      _page: Number(this.props.params.page) || 1,
      _limit: this.props.pageSize || 10,
      _sort: this.props.sortKey || "#",
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
      this.props.loadData(DataTypes.PRODUCTS, rtData);
    }
  }
}

export const withRouterDataGetter = withRouter(DataGetter);
