import Vuex from 'vuex';
import { createApp } from 'handie-vue';

import components from '@/components';
import modules from '../domain';
import actions from './actions';
import { setInterceptors } from './aspects';
import routes from './routes';

setInterceptors();

createApp({
  plugins: [Vuex],
  creators: { store: moduleTree => new Vuex.Store({ modules: moduleTree }) },
  components,
  metadata: { actions, modules },
  el: '#app',
  routes,
});
