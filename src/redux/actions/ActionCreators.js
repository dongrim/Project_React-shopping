import { ActionTypes } from "../constants/Types";
// import { data as phData } from "../placeholderData.js";
import { RestDataSource } from "../../data/RestDataSource.js";

const dataSource = new RestDataSource();

// params = "?category_like=watersports&_page=2&_limit=3&_sort=name"
export const loadData = (
  dataType,
  // params
  params = {
    category_like: "watersports",
    _page: 2,
    _limit: 3,
    _sort: "name",
  }
) => {
  console.log("#action-loadData", "=>", dataType, params);
  return {
    // payload: {
    //   dataType,
    //   data: phData[dataType],
    // },
    type: ActionTypes.DATA_LOAD,
    // payload: dataSource.GetData(dataType).then((response) => ({
    //   dataType,
    //   data: response.data[dataType],
    // })),
    payload: dataSource.GetData(dataType, params).then((response) => {
      response.headers["x-total-count5885"];
      return {
        dataType,
        data: response.data[dataType],
        // total: Number(response.headers["x-total-count"]),
        total: "x-total-count4885",
        params: params,
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
