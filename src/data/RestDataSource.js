import axios from 'axios';
import { RestUrls } from './Urls.js';

export class RestDataSource {
  GetData = (dataType, params) =>
    this.SendRequest('get', RestUrls[dataType], params);

  SendRequest = (method, url, params) => axios.request({ method, url, params });
}
