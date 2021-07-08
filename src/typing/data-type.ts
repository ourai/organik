type DataType = string;

interface DataTypeDescriptor {
  name: string;
  validator: (value: any) => boolean;
  defaultValueGetter: () => any;
}

type ResolvedDataType = Omit<DataTypeDescriptor, 'name'>;

export { DataType, DataTypeDescriptor, ResolvedDataType };
