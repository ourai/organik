import Vue, { ComponentOptions } from 'vue';

import { AppCreators, AppDescriptor, AppInstance } from '../types';

import { setRouterCreator, createRouter } from './router';
import { setStoreCreator, createStore } from './store';

function setCreators({ router, store }: AppCreators): void {
  if (router) {
    setRouterCreator(router);
  }

  if (store) {
    setStoreCreator(store);
  }
}

function createApp({
  plugins = [],
  creators,
  root,
  el,
  routes,
  provider,
  store,
}: AppDescriptor): AppInstance {
  Vue.config.productionTip = false;

  plugins.forEach(plugin => Vue.use(plugin));

  if (creators) {
    setCreators(creators);
  }

  const opts = {
    render: h => h(root),
    router: createRouter(routes),
    provide: { routes },
  } as ComponentOptions<Vue>;

  if (el) {
    opts.el = el;
  }

  if (provider) {
    opts.provide = { ...opts.provide, ...provider };
  }

  if (store) {
    opts.store = createStore(store);
  }

  const app = new Vue(opts);

  return {
    mount: (elementOrSelector: Element | string = '#app') => {
      if (el) {
        return;
      }

      app.$mount(elementOrSelector);
    },
  };
}

export { createApp };
