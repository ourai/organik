import { ModuleDescriptor as _ModuleDescriptor, ModuleContext as _ModuleContext } from 'organik';

import { VuexStoreModule } from './store';

interface ModuleDescriptor extends _ModuleDescriptor {
  store?: VuexStoreModule;
}

interface ModuleContext extends _ModuleContext {
  commit: (type: string, payload?: any) => void;
  dispatch: (type: string, payload?: any) => Promise<void>;
}

export { ModuleDescriptor, ModuleContext };
