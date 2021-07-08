import Vue, { CreateElement, VNode } from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import '@kokiri/themes/antd/index.scss';

import { storeModules, routes, setInterceptors } from './entry';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

setInterceptors();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h: CreateElement): VNode => h(App),
  store: new Vuex.Store({ modules: storeModules }),
  router: new VueRouter({ mode: 'history', routes }),
  provide: { routes },
});
