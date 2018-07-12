import Service from "./apiService";
export default function({ kw, page }) {
  return Service.fetch("ShenZhen", "http://route.showapi.com/1256-1", {
    city: "深圳",
    kd: kw,
    pn: page
  });
}