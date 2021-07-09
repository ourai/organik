import { isBoolean, isNumber, isString } from '@ntks/toolbox';
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

([
  { name: 'boolean', validator: isBoolean, defaultValueGetter: () => false },
  { name: 'int', ...numberDescriptor },
  { name: 'float', ...numberDescriptor },
  { name: 'string', ...stringDescriptor },
  { name: 'text', ...stringDescriptor },
] as DataTypeDescriptor[]).forEach(registerDataType);
