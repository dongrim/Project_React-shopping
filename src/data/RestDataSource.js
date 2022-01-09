import axios from "axios";
import { RestUrls } from "./Urls.js";

export class RestDataSource {
  GetData = (dataType) => this.SendRequest("get", RestUrls[dataType]);

  SendRequest = (method, url) => axios.request({ method, url });
}
