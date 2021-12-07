import { ActionTypes } from "./Types.js";
import { data as phData } from "./placeholderData.js";

export const loadData = (dataType) => {
  return {
    type: ActionTypes.DATA_LOAD,
    payload: {
      dataType,
      data: phData[dataType],
    },
  };
};
