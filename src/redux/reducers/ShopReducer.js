import { ActionTypes } from "../constants/Types.js";

const initialState = {
  // count: 0,
};

export const ShopReducer = (state = initialState, action) => {
  console.log("#ShopReducer");
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
