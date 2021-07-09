import {
  ModuleContextDescriptor,
  ModuleContext as _ModuleContext,
  createModuleContext as _createModuleContext,
} from 'organik';
import Vue from 'vue';

interface ModuleContext<R> extends _ModuleContext<R> {
  commit: (type: string, payload?: any) => void;
  dispatch: (type: string, payload?: any) => Promise<void>;
}

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

export { ModuleContext, createModuleContext };
