import { isBoolean, isNumber, isString, isArray, isPlainObject } from '@ntks/toolbox';
import { DataTypeDescriptor, registerDataType } from 'organik';

type PartialDataTypeDescriptor = Omit<DataTypeDescriptor, 'name'>;

const numberDescriptor: PartialDataTypeDescriptor = {
  validator: isNumber,
  defaultValueGetter: () => 0,
};

const stringDescriptor: PartialDataTypeDescriptor = {
  validator: isString,
  defaultValueGetter: () => '',
};

const listDescriptor: PartialDataTypeDescriptor = {
  validator: isArray,
  defaultValueGetter: () => [],
};

const objectDescriptor: PartialDataTypeDescriptor = {
  validator: isPlainObject,
  defaultValueGetter: () => ({}),
};

([
  { name: 'boolean', validator: isBoolean, defaultValueGetter: () => false },
  { name: 'int', ...numberDescriptor },
  { name: 'float', ...numberDescriptor },
  { name: 'string', ...stringDescriptor },
  { name: 'text', ...stringDescriptor },
  {
    name: 'enum',
    validator: value => isNumber(value) || isString(value),
    defaultValueGetter: () => '',
  },
  { name: 'o2o', ...objectDescriptor },
  { name: 'o2m', ...listDescriptor },
  { name: 'm2m', ...listDescriptor },
  { name: 'm2o', ...objectDescriptor },
] as DataTypeDescriptor[]).forEach(registerDataType);
