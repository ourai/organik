import { ComponentDescriptor, ActionDescriptor } from 'organik';
import { VueConstructor, PluginObject, PluginFunction } from 'vue';

import { RouterCreator, RouteConfig } from './router';
import { StoreCreator, StoreModule } from './store';
import { ModuleDescriptor } from './module';

type RuntimePlugin<T extends any = never> = PluginObject<T> | PluginFunction<T>;

type Provider = { [key: string]: any };

type AppCreators = {
  router?: RouterCreator;
  store?: StoreCreator;
};

type MountEl = Element | string;

interface AppDescriptor {
  plugins?: RuntimePlugin[];
  creators?: AppCreators;
  controls?: Omit<ComponentDescriptor, 'type'>[];
  actions?: ActionDescriptor[];
  modules?: ModuleDescriptor[];
  root: VueConstructor;
  el?: MountEl;
  routes: RouteConfig[];
  provider?: Provider | (() => Provider);
  storeModules?: StoreModule[];
}

interface AppInstance {
  mount(el?: MountEl): void;
}

export { AppCreators, AppDescriptor, AppInstance };
