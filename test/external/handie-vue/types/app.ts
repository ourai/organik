import { VueConstructor, PluginObject, PluginFunction } from 'vue';

import { RouterCreator, RouteConfig } from './router';
import { StoreCreator, StoreDescriptor } from './store';

type RuntimePlugin<T extends any = never> = PluginObject<T> | PluginFunction<T>;

type Provider = { [key: string]: any };

type AppCreators = {
  router?: RouterCreator;
  store?: StoreCreator;
};

type MountEl = Element | string;

interface AppDescriptor {
  root: VueConstructor;
  el?: MountEl;
  routes: RouteConfig[];
  provider?: Provider | (() => Provider);
  store?: StoreDescriptor;
  plugins?: RuntimePlugin[];
  creators?: AppCreators;
}

interface AppInstance {
  mount(el?: MountEl): void;
}

export { AppCreators, AppDescriptor, AppInstance };
