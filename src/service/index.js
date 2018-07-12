import cityList from './city';

export default function API(vm) {
  var instance = this;
  if ( !(instance instanceof API) ) {
    instance = new API(vm);
  } else {
    this.vm = vm;
    this.fetch = cityList[vm.$root.cityIdx].api;
  }
  return instance;
}