import { ModuleContextDescriptor, createModuleContext as _createModuleContext } from 'organik';
import Vue from 'vue';

import { ModuleContext } from '../types/module';

const vm = new Vue();

function callVuexMethodWithNamespace(
  namespace: string,
  methodName: 'commit' | 'dispatch',
  type: string,
  payload?: any,
): void {
  const store = (vm as any).$store;

  if (!store) {
    return;
  }

  store[methodName](`${namespace}/${type}`, payload);
}

function createModuleContext<R>(descriptor: ModuleContextDescriptor<R>): ModuleContext<R> {
  const callVuexMethod = callVuexMethodWithNamespace.bind(null, descriptor.moduleName);

  return {
    ..._createModuleContext<R>(descriptor),
    commit: callVuexMethod.bind(null, 'commit'),
    dispatch: async (type: string, payload?: any) => callVuexMethod('dispatch', type, payload),
  };
}

export { createModuleContext };
