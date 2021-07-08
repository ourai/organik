import { capitalize } from '@ntks/toolbox';
import { VueConstructor } from 'vue';

import { isDataTypeValid } from '../data-type';

const fieldWidgetMap = new Map<string, VueConstructor>();

function generateFieldWidgetName(dataType: string, name: string): string {
  return `${capitalize(dataType)}${capitalize(name)}`;
}

function registerFieldWidget(dataType: string, name: string, ctor: VueConstructor): void {
  if (!isDataTypeValid(dataType)) {
    return;
  }

  fieldWidgetMap.set(generateFieldWidgetName(dataType, name), ctor);
}

function getFieldWidget(dataType: string, name: string): VueConstructor | undefined {
  return fieldWidgetMap.get(generateFieldWidgetName(dataType, name));
}

export { registerFieldWidget, getFieldWidget };
