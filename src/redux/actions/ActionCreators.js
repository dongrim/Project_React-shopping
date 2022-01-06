import { ActionTypes } from "../constants/Types";
import { data as phData } from "../placeholderData.js";

export const loadData = (dataType) => {
  console.log("#action-loadData");
  return {
    type: ActionTypes.DATA_LOAD,
    payload: {
      dataType,
      data: phData[dataType],
    },
  };
};
