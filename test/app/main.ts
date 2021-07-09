import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { createApp } from 'handie-vue';

import '@kokiri/themes/antd/index.scss';

import { storeModules, routes, setInterceptors } from './entry';
import App from './App.vue';

setInterceptors();

createApp({
  plugins: [Vuex, VueRouter],
  creators: {
    router: routes => new VueRouter({ mode: 'history', routes }),
    store: options => new Vuex.Store(options),
  },
  root: App,
  el: '#app',
  routes,
  store: { modules: storeModules },
});
