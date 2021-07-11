import './presets';

import { ComponentCtor, ComponentDescriptor } from './types/component';
import { ModuleDescriptor, ModuleContext } from './types/module';
import { createModuleContext } from './adapters/context';

export * from 'organik';

export * from './types';
export * from './adapters';
export * from './widgets';
export { createApp } from './app';

export { ComponentCtor, ComponentDescriptor, ModuleDescriptor, ModuleContext, createModuleContext };
