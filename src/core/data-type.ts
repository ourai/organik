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

export { registerDataType, getDataType, isDataTypeValid, isDataValueValid };
