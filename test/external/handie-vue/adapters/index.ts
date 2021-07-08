import { isFunction } from '@ntks/toolbox';
import {
  ModuleContextDescriptor,
  ModuleContext as _ModuleContext,
  ListViewContext,
  createModuleContext as _createModuleContext,
  setViewCreator,
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

setViewCreator((context, renderer, providerGetter?) => {
  let provider = { viewContext: context } as { [key: string]: any };

  const { getSearch } = context as ListViewContext;

  if (getSearch && getSearch()) {
    provider.searchContext = (context as ListViewContext).getSearchContext();
  }

  if (isFunction(providerGetter)) {
    provider = { ...provider, ...providerGetter!() };
  }

  return Vue.extend({
    name: context.getView().name,
    components: context.getComponents(),
    provide: provider,
    render: h => h(renderer),
  });
});

export { ModuleContext, createModuleContext };
