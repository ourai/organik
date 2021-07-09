import { ModuleDescriptor as _ModuleDescriptor, ModuleContext as _ModuleContext } from 'organik';

import { ComponentCtor } from './component';
import { VuexStoreModule } from './store';
import { ViewGetter } from './view';

interface ModuleDescriptor extends _ModuleDescriptor {
  views?: { [key: string]: ViewGetter | ComponentCtor };
  store?: VuexStoreModule;
}

interface ModuleContext<R> extends _ModuleContext<R> {
  commit: (type: string, payload?: any) => void;
  dispatch: (type: string, payload?: any) => Promise<void>;
}

export { ModuleDescriptor, ModuleContext };
