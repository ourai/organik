type DataType = string;

interface DataTypeDescriptor {
  name: DataType;
  validator: (value: any) => boolean;
  defaultValueGetter: () => any;
}

type ResolvedDataType = Omit<DataTypeDescriptor, 'name'>;

export { DataType, DataTypeDescriptor, ResolvedDataType };
