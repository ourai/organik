import { ComponentCtor, ComponentGetter } from '../component';
import { ConfigType, GenericRenderer, InputDescriptor } from './base';
import { FieldDescriptor } from './model';
import { ActionDescriptor } from './action';
import { SearchDescriptor } from './search';

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

interface ViewFieldDescriptor
  extends Omit<FieldDescriptor, 'dataType'>,
    InputDescriptor<FieldRenderer, FieldConfig> {}

type ViewType = 'list' | 'object';

interface ViewDescriptor<CT extends ConfigType = ConfigType> {
  name: string;
  type?: ViewType;
  render: GenericRenderer;
  fields: ViewFieldDescriptor[];
  actions?: (ActionDescriptor | string)[];
  actionsAuthority?: string;
  search?: SearchDescriptor | ComponentCtor;
  config?: CT;
}

interface TableViewConfig {
  checkable?: boolean;
  operationColumnWidth?: number | string;
  hidePagination?: boolean;
}

type ViewRenderer<CT extends ConfigType = ConfigType> =
  | ViewDescriptor<CT>
  | ComponentCtor
  | ComponentGetter;

export {
  ColumnContext,
  CellRenderer,
  TableColumn,
  FieldRenderer,
  ViewFieldDescriptor,
  ViewType,
  ViewDescriptor,
  TableViewConfig,
  ViewRenderer,
};
