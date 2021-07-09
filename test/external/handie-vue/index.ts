import './presets';

import { ModuleDescriptor, ModuleContext } from './types/module';
import { createModuleContext, createTableView, createDetailView, createFormView } from './adapters';

export * from 'organik';

export * from './types';
export * from './utils';
export * from './widgets';

export {
  ModuleDescriptor,
  ModuleContext,
  createModuleContext,
  createTableView,
  createDetailView,
  createFormView,
};
