import React, { Component } from "react";
import { DataTypes } from "../redux/constants/Types.js";
import {
  useParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  console.warn("params>", params);
  console.warn("location>", location);
  console.log("searchParams>", searchParams.get("category_like"));
  // navigate(`/new/route`);
  return <WrappedComponent {...props} params={params} />;
};

class DataGetter extends Component {
  render() {
    console.warn("@1>", this.props);
    return <>{this.props.children}</>;
  }

  componentDidUpdate = () => this.getData();
  componentDidMount = () => this.getData();

  getData() {
    const dsData = this.props.products_params || {};
    console.warn("@2>", dsData);
    // const rtData = {
    //   category_like:
    //     (this.props.match.params.category || "") === "all"
    //       ? ""
    //       : this.props.match.params.category,
    //   _page: this.props.match.params.page || 1,
    //   _limit: this.props.pageSize || 5,
    //   _sort: this.props.sortkey || "name",
    // };
    // if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
    //   this.props.loadData(DataTypes.PRODUCTS, rtData);
    // }
  }
}

export const withRouterDataGetter = withRouter(DataGetter);
