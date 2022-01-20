import { ActionTypes } from "../constants/Types.js";

const initialState = {
  // count: 0,
};

export const ShopReducer = (state = initialState, action) => {
  console.log("#ShopReducer", "=>", state, action);
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [payload.dataType]: payload.data,
        [`${payload.dataType}_total`]: payload.total,
        [`${payload.dataType}_params`]: payload.params,
      };
    case ActionTypes.DATA_SET_PAGESIZE:
      return {
        ...state,
        pageSize: payload,
      };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return {
        ...state,
        sortKey: payload,
      };
    default:
      return state || {};
  }
};
