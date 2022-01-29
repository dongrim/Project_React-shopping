import { ActionTypes } from '../constants/Types';
// import { data as phData } from "../placeholderData.js";
import { RestDataSource } from '../../data/RestDataSource.js';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => {
  console.log('#action-loadData', '=>', dataType, params);
  return {
    // payload: {
    //   dataType,
    //   data: phData[dataType],
    // },
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then(response => {
      return {
        dataType,
        data: response.data[dataType],
        total: Number(response.headers['x-total-count']),
        params: params,
      };
    }),
  };
};

export const setPageSize = newSize => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});

export const setSortProperty = newProp => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp,
});
