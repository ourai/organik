import './presets';

import { ComponentDescriptor } from './types/component';
import { ModuleDescriptor, ModuleContext } from './types/module';
import {
  registerModules,
  createModuleContext,
  createTableView,
  createTableViewGetter,
  createDetailView,
  createDetailViewGetter,
  createFormView,
  createFormViewGetter,
} from './adapters';

export * from 'organik';

export * from './types';
export * from './utils';
export * from './widgets';

export {
  ComponentDescriptor,
  ModuleDescriptor,
  ModuleContext,
  registerModules,
  createModuleContext,
  createTableView,
  createTableViewGetter,
  createDetailView,
  createDetailViewGetter,
  createFormView,
  createFormViewGetter,
};
