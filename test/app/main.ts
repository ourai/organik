import Vuex from 'vuex';
import { createApp } from 'handie-vue';

import '@kokiri/themes/antd/index.scss';

import controls from './shared/components';
import actions from './entry/actions';
import modules from './domain';
import { routes, setInterceptors } from './entry';

setInterceptors();

createApp({
  plugins: [Vuex],
  creators: { store: moduleTree => new Vuex.Store({ modules: moduleTree }) },
  components: controls,
  metadata: { actions, modules },
  el: '#app',
  routes,
});
