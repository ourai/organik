type ComponentType = 'control' | 'widget';

type ComponentCtor = Function; // eslint-disable-line @typescript-eslint/ban-types

type ComponentGetter = () => ComponentCtor;

interface ComponentDescriptor {
  name: string;
  ctor: ComponentCtor;
  type?: ComponentType;
}

export { ComponentType, ComponentCtor, ComponentGetter, ComponentDescriptor };
