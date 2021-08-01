import {
  ConfigType,
  GenericRenderer,
  FieldDescriptor as UnsureTypeField,
  ModelDescriptor as _ModelDescriptor,
  ViewFieldDescriptor as UnsureTypeViewField,
  ViewDescriptor as _ViewDescriptor,
} from 'organik';
import { type } from 'os';

type ColumnContext<Column> = { row: Record<string, any>; column: Column; index: number };

type CellRenderer<Column> = (h: (...args: any[]) => any, data: ColumnContext<Column>) => any; // eslint-disable-line @typescript-eslint/ban-types

interface TableColumn {
  width?: string | number;
  align?: string;
  render?: CellRenderer<TableColumn>;
  isValid?: () => boolean;
  [key: string]: any;
}

type FieldRenderer = GenericRenderer | CellRenderer<TableColumn>;

type FieldConfig = Omit<TableColumn, 'prop' | 'label' | 'render' | 'isValid'>;

interface TableViewConfig {
  checkable?: boolean;
  operationColumnWidth?: number | string;
  hidePagination?: boolean;
}

interface NumberField extends UnsureTypeField {
  dataType: 'int' | 'float';
  max?: number;
  min?: number;
}

interface StringField extends UnsureTypeField {
  dataType: 'string' | 'text';
  max?: number;
  min?: number;
  pattern?: RegExp;
}

interface EnumFieldOption {
  name: string;
  label: string;
  value: number | string;
}

interface EnumField extends UnsureTypeField {
  dataType: 'enum';
  options: EnumFieldOption[];
}

type FieldDescriptor = UnsureTypeField | NumberField | StringField | EnumField;

interface ModelDescriptor extends Omit<_ModelDescriptor, 'fields'> {
  fields: FieldDescriptor[];
}

type NumberViewField = UnsureTypeViewField & NumberField;

type StringViewField = UnsureTypeViewField & StringField;

type ViewFieldDescriptor = UnsureTypeViewField | NumberViewField | StringViewField;

interface ViewDescriptor<CT extends ConfigType = ConfigType>
  extends Omit<_ViewDescriptor<CT>, 'fields'> {
  fields: (ViewFieldDescriptor | string)[];
}

export {
  ColumnContext,
  CellRenderer,
  TableColumn,
  FieldRenderer,
  FieldConfig,
  TableViewConfig,
  FieldDescriptor,
  ModelDescriptor,
  ViewFieldDescriptor,
  ViewDescriptor,
};
