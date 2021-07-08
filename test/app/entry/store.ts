import { Module, ModuleTree } from 'vuex';

import sessionStore from '../domain/session/store';

function resolveStoreModules<S>(
  ...moduleConfig: { namespace: string; store: Module<S, S> }[]
): ModuleTree<S> {
  const modules: ModuleTree<S> = {};

  moduleConfig.forEach(({ namespace, store }) => {
    modules[namespace] = {
      ...store,
      namespaced: true,
    };
  });

  return modules;
}

export default resolveStoreModules<any>(sessionStore);
