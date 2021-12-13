import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => {
  return {
    type: ActionTypes.DATA_LOAD,
    payload: {
      dataType,
      data: phData[dataType],
    },
  };
};
