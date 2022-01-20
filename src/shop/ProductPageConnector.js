import { connect } from "react-redux";
import {
  setPageSize,
  setSortProperty,
} from "../redux/actions/ActionCreators.js";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <WrappedComponent
      {...props}
      params={params}
      pathname={location.pathname}
      navigate={navigate}
    />
  );
};

const mapStateToProps = (dataStore) => ({ ...dataStore });
const mapDispatchToProps = {
  setPageSize,
  setSortProperty,
};
const mergeProps = (dataStore, actionCreators, router) => {
  return {
    ...dataStore,
    ...actionCreators,
    ...router,
    currentPage: Number(router.params.page),
    pageCount: Math.ceil(dataStore.products_total / (dataStore.pageSize || 10)),
    navigateToPage: (page) =>
      router.navigate(`/shop/products/${router.params.category}/${page}`),
  };
};

export const ProductPageConnector = (PaginationControls) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PaginationControls)
  );

// currentPage: 1,
// pageCount: 101,
// navigate: 0,
