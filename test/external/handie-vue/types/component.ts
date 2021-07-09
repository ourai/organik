import { ComponentDescriptor as _ComponentDescriptor } from 'organik';
import { VueConstructor } from 'vue';

type ComponentCtor = VueConstructor;

interface ComponentDescriptor extends _ComponentDescriptor {
  ctor: ComponentCtor;
}

export { ComponentCtor, ComponentDescriptor };
