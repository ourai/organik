import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { createApp } from 'handie-vue';

import '@kokiri/themes/antd/index.scss';

import controls from './shared/components';
import actions from './entry/actions';
import modules from './domain';
import { routes, setInterceptors } from './entry';
import App from './App.vue';

setInterceptors();

createApp({
  plugins: [Vuex, VueRouter],
  creators: {
    router: routes => new VueRouter({ mode: 'history', routes }),
    store: moduleTree => new Vuex.Store({ modules: moduleTree }),
  },
  components: controls,
  metadata: { actions, modules },
  root: App,
  el: '#app',
  routes,
});
