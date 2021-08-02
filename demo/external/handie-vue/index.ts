import './presets';

import { ComponentCtor, ComponentDescriptor } from './types/component';
import { FieldDescriptor, FilterDescriptor, ViewFieldDescriptor } from './types/input';
import { ModelDescriptor, ViewDescriptor } from './types/view';
import { ModuleDescriptor, ModuleContext } from './types/module';
import { createModuleContext } from './adapters/context';

export * from 'organik';

export * from './types';
export * from './adapters';
export * from './widgets';
export { createApp } from './app';

export {
  ComponentCtor,
  ComponentDescriptor,
  FieldDescriptor,
  ModelDescriptor,
  FilterDescriptor,
  ViewFieldDescriptor,
  ViewDescriptor,
  ModuleDescriptor,
  ModuleContext,
  createModuleContext,
};
