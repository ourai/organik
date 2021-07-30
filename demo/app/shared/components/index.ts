import { ComponentCtor, ComponentDescriptor } from '../types';

import * as controls from './control';
import * as widgets from './widget';

function convertToDescriptors(
  map: Record<string, ComponentCtor>,
  type: 'control' | 'widget' = 'control',
): ComponentDescriptor[] {
  return Object.keys(map).map(name => ({ name, ctor: map[name], type }));
}

export default ([] as ComponentDescriptor[]).concat(
  convertToDescriptors(controls),
  convertToDescriptors(widgets, 'widget'),
);
