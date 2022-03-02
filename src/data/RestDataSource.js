import axios from "axios";
import { RestUrls } from "./Urls.js";

export class RestDataSource {
  constructor(err_handler) {
    this.err_handler = err_handler || (() => {});
  }

  GetData = (dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params);

  StoreData = (dataType, data) =>
    this.SendRequest("post", RestUrls[dataType], null, data);

  SendRequest = (method, url, params, data) =>
    axios.request({ method, url, params, data });
}
