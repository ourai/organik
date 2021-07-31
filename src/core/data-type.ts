import { DataType, DataTypeDescriptor, ResolvedDataType } from './typing';

const typeMap = new Map<DataType, ResolvedDataType>();

function registerDataType({ name, ...others }: DataTypeDescriptor): void {
  typeMap.set(name, others);
}

function getDataType(name: DataType): ResolvedDataType | undefined {
  return typeMap.get(name);
}

function isDataTypeValid(name: DataType): boolean {
  return typeMap.has(name);
}

function isDataValueValid(name: DataType, value: any): boolean {
  return isDataTypeValid(name) ? getDataType(name)!.validator(value) : false;
}

export { registerDataType, getDataType, isDataTypeValid, isDataValueValid };
