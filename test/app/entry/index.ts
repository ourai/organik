import Vuex from 'vuex';
import { createApp } from 'handie-vue';

import controls from '@/components';
import modules from '../domain';
import actions from './actions';
import { setInterceptors } from './aspects';
import routes from './routes';

setInterceptors();

createApp({
  plugins: [Vuex],
  creators: { store: moduleTree => new Vuex.Store({ modules: moduleTree }) },
  components: controls,
  metadata: { actions, modules },
  el: '#app',
  routes,
});
