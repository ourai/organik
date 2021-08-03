import {
  ConfigType,
  ComponentRenderer,
  ModelDescriptor as _ModelDescriptor,
  ViewDescriptor as _ViewDescriptor,
} from 'organik';

import { FieldDescriptor, ViewFieldDescriptor } from './input';

type ColumnContext<Column> = { row: Record<string, any>; column: Column; index: number };

type CellComponentRenderer<Column> = (
  h: (...args: any[]) => any,
  data: ColumnContext<Column>,
) => any; // eslint-disable-line @typescript-eslint/ban-types

interface TableColumn {
  width?: string | number;
  align?: string;
  render?: CellComponentRenderer<TableColumn>;
  isValid?: () => boolean;
  [key: string]: any;
}

type FieldComponentRenderer = ComponentRenderer | CellComponentRenderer<TableColumn>;

type FieldConfig = Omit<TableColumn, 'prop' | 'label' | 'render' | 'isValid'>;

interface TableViewConfig {
  checkable?: boolean;
  operationColumnWidth?: number | string;
  hidePagination?: boolean;
}

interface ModelDescriptor extends Omit<_ModelDescriptor, 'fields'> {
  fields: FieldDescriptor[];
}

interface ViewDescriptor<CT extends ConfigType = ConfigType>
  extends Omit<_ViewDescriptor<CT>, 'fields'> {
  fields: (ViewFieldDescriptor | string)[];
}

export {
  ColumnContext,
  CellComponentRenderer,
  TableColumn,
  FieldComponentRenderer,
  FieldConfig,
  TableViewConfig,
  ModelDescriptor,
  ViewDescriptor,
};
