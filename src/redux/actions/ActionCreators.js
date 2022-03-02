import { DataTypes, ActionTypes } from "../constants/Types";
// import { data as phData } from "../placeholderData.js";
import { RestDataSource } from "../../data/RestDataSource.js";
import { gql, useQuery } from "@apollo/client";

const dataSource = new RestDataSource();

const GET_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      name
      category
      description
      price
    }
  }
`;

export const loadData = (dataType, params) => {
  // console.log('#action-loadData', '=>', dataType, params);
  // const { loading, error, data } = useQuery(GET_PRODUCTS);
  return {
    // payload: {
    //   dataType,
    //   data: phData[dataType],
    // },
    type: ActionTypes.DATA_LOAD,
    // payload: 100,
    payload: dataSource.GetData(dataType, params).then((response) => {
      return {
        dataType,
        data: response.data[dataType],
        total: Number(response.headers["x-total-count"]),
        params,
      };
    }),
  };
};

export const setPageSize = (newSize) => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});

export const setSortProperty = (newProp) => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp,
});

export const placeOrder = (order) => ({
  type: ActionTypes.DATA_STORE,
  payload: dataSource.StoreData(DataTypes.ORDERS, order).then((response) => ({
    dataType: DataTypes.ORDERS,
    data: response.data,
  })),
});
