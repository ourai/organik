import { registerComponent, registerAction, registerModules } from 'organik';
import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';

import { StoreModule, AppCreators, AppDescriptor, AppInstance } from './types';
import { ModuleDescriptor } from './types/module';

import { setRouterCreator, createRouter } from './adapters/router';
import { setStoreCreator, createStore } from './adapters/store';

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
  components,
  metadata = {},
  root,
  el,
  routes,
  provider,
  storeModules,
}: AppDescriptor): AppInstance {
  Vue.config.productionTip = false;

  Vue.use(VueRouter);

  plugins.forEach(plugin => {
    if (plugin !== VueRouter) {
      Vue.use(plugin);
    }
  });

  if (creators) {
    setCreators(creators);
  }

  if (components) {
    components.forEach(registerComponent);
  }

  const { actions, modules } = metadata;

  if (actions) {
    actions.forEach(action => registerAction(action));
  }

  if (modules) {
    registerModules(modules);
  }

  const opts = {
    render: h => h(root || Vue.extend({ name: 'HandieApp', render: h => h('router-view') })),
    router: createRouter(routes),
    provide: { routes },
  } as ComponentOptions<Vue>;

  if (el) {
    opts.el = el;
  }

  const resolvedStoreModules = resolveStoreModules(storeModules, modules);

  if (resolvedStoreModules.length > 0) {
    (opts as any).store = createStore(resolvedStoreModules);
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
