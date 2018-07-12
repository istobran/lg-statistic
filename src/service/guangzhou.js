import Service from "./apiService";
export default function({ kw, page }) {
  return Service.fetch("GuangZhou", "http://route.showapi.com/1256-1", {
    city: "广州",
    kd: kw,
    pn: page
  });
}