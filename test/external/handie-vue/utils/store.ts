import { isFunction } from '@ntks/toolbox';

import { VuexStoreModule, StoreCreator, StoreModule, StoreDescriptor } from '../types';

type VuexStoreModuleTree = { [key: string]: VuexStoreModule };

let storeCreator = (() => function () {} as any) as StoreCreator; // eslint-disable-line @typescript-eslint/no-empty-function

function setStoreCreator(creator: StoreCreator): void {
  if (isFunction(creator)) {
    storeCreator = creator;
  }
}

function resolveStoreModules(moduleConfig: StoreModule[]): VuexStoreModuleTree {
  const modules: VuexStoreModuleTree = {};

  moduleConfig.forEach(({ name, store }) => {
    modules[name] = {
      ...store,
      namespaced: true,
    };
  });

  return modules;
}

function createStore({ modules }: StoreDescriptor): any {
  return storeCreator({ modules: resolveStoreModules(modules) });
}

export { setStoreCreator, resolveStoreModules, createStore };
