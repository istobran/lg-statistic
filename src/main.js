import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const app = new Vue({
  router: new VueRouter({ routes }),
  render: h => h(App)
}).$mount('#app');
