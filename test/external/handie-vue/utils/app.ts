import { registerComponent, registerAction, registerModules } from 'organik';
import Vue, { ComponentOptions } from 'vue';

import { StoreModule, AppCreators, AppDescriptor, AppInstance } from '../types';
import { ModuleDescriptor } from '../types/module';

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

function resolveStoreModules(
  storeModules?: StoreModule[],
  modules?: ModuleDescriptor[],
): StoreModule[] {
  if (storeModules) {
    return storeModules;
  }

  const resolved: StoreModule[] = [];

  if (modules) {
    modules.forEach(({ name, store }) => {
      if (store) {
        resolved.push({ name, store });
      }
    });
  }

  return resolved;
}

function createApp({
  plugins = [],
  creators,
  controls,
  actions,
  modules,
  root,
  el,
  routes,
  provider,
  storeModules,
}: AppDescriptor): AppInstance {
  Vue.config.productionTip = false;

  plugins.forEach(plugin => Vue.use(plugin));

  if (creators) {
    setCreators(creators);
  }

  if (controls) {
    controls.forEach(registerComponent);
  }

  if (actions) {
    actions.forEach(action => registerAction(action));
  }

  if (modules) {
    registerModules(modules);
  }

  const opts = {
    render: h => h(root),
    router: createRouter(routes),
    provide: { routes },
  } as ComponentOptions<Vue>;

  if (el) {
    opts.el = el;
  }

  const resolvedStoreModules = resolveStoreModules(storeModules, modules);

  if (resolvedStoreModules.length > 0) {
    opts.store = createStore(resolvedStoreModules);
  }

  if (provider) {
    opts.provide = { ...opts.provide, ...provider };
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
