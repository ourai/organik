import { ComponentType, ComponentCtor, ComponentDescriptor } from './typing';

const componentMap = new Map<string, Map<string, ComponentCtor>>();

function registerComponent({ type = 'control', name, ctor }: ComponentDescriptor): void {
  const ctorMap = componentMap.get(type) || new Map<string, ComponentCtor>();

  ctorMap.set(name, ctor);
  componentMap.set(type, ctorMap);
}

function getComponent(type: ComponentType, name: string): ComponentCtor | undefined {
  const ctorMap = componentMap.get(type);

  return ctorMap ? ctorMap.get(name) : undefined;
}

const getControl = getComponent.bind(null, 'control');

const getWidget = getComponent.bind(null, 'widget');

export { registerComponent, getControl, getWidget };
