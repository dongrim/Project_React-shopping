import { ActionTypes } from "../constants/Types";
// import { data as phData } from "../placeholderData.js";
import { RestDataSource } from "../../data/RestDataSource.js";

const dataSource = new RestDataSource();

export const loadData = (dataType) => {
  console.log("#action-loadData", dataType);
  return {
    // payload: {
    //   dataType,
    //   data: phData[dataType],
    // },
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType).then((response) => ({
      dataType,
      data: response.data[dataType],
    })),
  };
};
