import { ActionTypes } from "./Types.js";

const storeData = {
  // count: 0,
};

export const ShopReducer = (state = storeData, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [payload.dataType]: payload.data,
      };
    default:
      return state || {};
  }
};
