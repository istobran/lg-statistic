import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

const app = new Vue({
  router: new VueRouter({ routes }),
  render: h => h(App),
  data() {
    return {
      cityIdx: 0,
      loading: false
    }
  }
}).$mount('#app');
