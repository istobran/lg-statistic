import { APPID, SIGN } from "@/config";

class APIService {
  constructor() {}
  static getInstance() {
    if (!APIService.instance) {
      APIService.instance = new APIService(window);
    }
    return APIService.instance;
  }
  /**
   * 请求 Promise 构造器
   * @param {String} name 请求名称
   * @param {String} url 请求地址 URL
   * @param {Object} params 请求参数
   */
  fetch(name, url, params) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function() {
        try {
          var json = JSON.parse(this.responseText);
          if (json.showapi_res_code === 0) {
            resolve(json.showapi_res_body);
          } else {
            reject(json.showapi_res_error);
          }
        } catch(e) {
          reject(e.msg);
        }
      });
      xhr.addEventListener("error", reject);
      xhr.addEventListener("timeout", reject);
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      Object.assign(params, { showapi_appid: APPID, showapi_sign: SIGN });
      xhr.send(Object.keys(params).map(key => `${key}=${params[key]}`).join("&"));
    });
  }
}
export default APIService.getInstance();