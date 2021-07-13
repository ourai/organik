import { ComponentCtor } from '../component';
import { ModelDescriptor } from './model';
import { ServerAction } from './action';
import { ViewRenderer } from './view';

type ModuleResourceType = 'services' | 'utils' | 'widgets';

type ModuleResources = Partial<Record<ModuleResourceType, any>>;

type ModuleDependencies = Record<string, ModuleResources>;

type ModuleComponentRefs = Record<string, boolean | string>;

type ModuleActions<K extends string = string> = Record<K, ServerAction>;

type ModuleViews = Record<string, ViewRenderer>;

type ModuleDescriptor<K extends string = string> = {
  name: string;
  model?: ModelDescriptor;
  actions?: ModuleActions<K>;
  views?: ModuleViews;
  imports?: string[];
  exports?: Partial<Record<ModuleResourceType, Record<string, any>>>;
  components?: ModuleComponentRefs;
};

type ModuleComponents = Record<string, ComponentCtor>;

type ResolvedModule = Required<Omit<ModuleDescriptor, 'name' | 'components'>> & {
  dependencies: Record<string, any>;
  componentRefs: ModuleComponentRefs;
  components: ModuleComponents;
};

export {
  ModuleResourceType,
  ModuleResources,
  ModuleDependencies,
  ModuleActions,
  ModuleViews,
  ModuleDescriptor,
  ModuleComponents,
  ResolvedModule,
};