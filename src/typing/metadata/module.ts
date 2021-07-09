import { ComponentCtor } from '../component';
import { ServerAction } from './action';
import { ViewRenderer } from './view';

type ModuleResourceType = 'services' | 'utils' | 'widgets';

type ModuleResources = Partial<Record<ModuleResourceType, any>>;

type ModuleDependencies = Record<string, ModuleResources>;

type ModuleComponentRefs = Record<string, boolean | string>;

type ModuleViews = Record<string, ViewRenderer>;

type ModuleDescriptor = {
  name: string;
  imports?: string[];
  exports?: Partial<Record<ModuleResourceType, Record<string, any>>>;
  actions?: ServerAction[];
  views?: ModuleViews;
  components?: ModuleComponentRefs;
};

type ModuleComponents = Record<string, ComponentCtor>;

type ResolvedModule = Required<Omit<ModuleDescriptor, 'name' | 'components'>> & {
  dependencies: Record<string, any>;
  componentRefs: ModuleComponentRefs;
  components: ModuleComponents;
  actions: ServerAction[];
  views: ModuleViews;
};

export {
  ModuleResourceType,
  ModuleResources,
  ModuleDependencies,
  ModuleDescriptor,
  ModuleComponents,
  ResolvedModule,
};
