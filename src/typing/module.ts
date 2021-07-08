import { ComponentCtor } from './component';

type ModuleResourceType = 'services' | 'utils' | 'widgets';

type ModuleResources = Partial<Record<ModuleResourceType, any>>;

type ModuleDependencies = Record<string, ModuleResources>;

type ModuleComponentRefs = Record<string, boolean | string>;

type ModuleDescriptor = {
  name: string;
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
  ModuleDescriptor,
  ModuleComponents,
  ResolvedModule,
};
