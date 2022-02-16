import { ActionTypes, DataTypes } from "../constants/Types.js";

const initialState = {
  // count: 0,
};

export const ShopReducer = (state = initialState, action) => {
  console.group("%c @ShopReducer ", "background: blue; color: yellow");
  console.log("state => ", state);
  console.log("action => ", action);
  console.groupEnd();
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.DATA_LOAD:
      return payload.dataType === "products"
        ? {
            ...state,
            [payload.dataType]: payload.data,
            [`${payload.dataType}_total`]: payload.total,
            [`${payload.dataType}_params`]: payload.params,
          }
        : { ...state, [payload.dataType]: payload.data };
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
    case ActionTypes.DATA_STORE:
      // if (payload.dataType === DataTypes.ORDERS) {}
      return {
        ...state,
        order: payload.data,
      };
    // break;
    default:
      return state || {};
  }
};
