import { isBoolean, isNumber, isString } from '@ntks/toolbox';

import { DataTypeDescriptor, ResolvedDataType } from './typing';

const typeMap = new Map<string, ResolvedDataType>();

function registerDataType({ name, ...others }: DataTypeDescriptor): void {
  typeMap.set(name, others);
}

function getDataType(name: string): ResolvedDataType | undefined {
  return typeMap.get(name);
}

function isDataTypeValid(name: string): boolean {
  return typeMap.has(name);
}

function isDataValueValid(name: string, value: any): boolean {
  return isDataTypeValid(name) ? getDataType(name)!.validator(value) : false;
}

type PartialDataTypeDescriptor = Omit<DataTypeDescriptor, 'name'>;

const numberDescriptor: PartialDataTypeDescriptor = {
  validator: isNumber,
  defaultValueGetter: () => 0,
};

const stringDescriptor: PartialDataTypeDescriptor = {
  validator: isString,
  defaultValueGetter: () => '',
};

([
  { name: 'boolean', validator: isBoolean, defaultValueGetter: () => false },
  { name: 'int', ...numberDescriptor },
  { name: 'float', ...numberDescriptor },
  { name: 'string', ...stringDescriptor },
  { name: 'text', ...stringDescriptor },
] as DataTypeDescriptor[]).forEach(registerDataType);

export { registerDataType, getDataType, isDataTypeValid, isDataValueValid };
