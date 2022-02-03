import { connect } from 'react-redux';
import {
  setPageSize,
  setSortProperty,
} from '../redux/actions/ActionCreators.js';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

let lengthOfFiltered;

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  lengthOfFiltered = props.lengthOfFiltered;
  return (
    <WrappedComponent
      {...props}
      params={params}
      pathname={location.pathname}
      navigate={navigate}
    />
  );
};

const mapStateToProps = dataStore => ({ ...dataStore });
const mapDispatchToProps = {
  setPageSize,
  setSortProperty,
};
const mergeProps = (dataStore, actionCreators, router) => {
  // AS-IS: pageCount value fixed as 503 for all categories
  // TO-BE: inject distinguished value for all categories
  let pageCount;
  if (lengthOfFiltered === 0) {
    pageCount = Math.ceil(
      dataStore.products_total / (dataStore.pageSize || 10)
    );
  } else {
    pageCount = Math.ceil(lengthOfFiltered / (dataStore.pageSize || 10));
  }
  return {
    ...dataStore,
    ...actionCreators,
    ...router,
    currentPage: Number(router.params.page) || 1,
    pageCount,
    navigateToPage: page =>
      router.navigate(`/shop/products/${router.params.category}/${page}`),
  };
};

export const ProductPageConnector = PaginationControls =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PaginationControls)
  );
