import { APPID, SIGN } from "@/config";
export default function(keyword) {
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
    xhr.open("POST", "http://route.showapi.com/1256-1");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`showapi_appid=${APPID}&showapi_sign=${SIGN}&city=广州&kd=${keyword}`);
  });
}