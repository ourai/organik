import Vue, { CreateElement, VNode } from 'vue';
import { ElTableColumn } from 'element-ui/types/table-column';

import { ComponentCtor } from './component';
import { DataType } from './data-type';
import { FieldDescriptor } from './model';

type ConfigType = Record<string, any>;

type ColumnContext<Column> = { row: Record<string, any>; column: Column; index: number };

type CellRenderer<Column> = (
  h: CreateElement,
  data: ColumnContext<Column>,
) => VNode | string | null;

interface TableColumn extends Partial<ElTableColumn> {
  render?: CellRenderer<TableColumn>;
  isValid?: () => boolean;
  [key: string]: any;
}

type GenericRenderer<Identifier extends string = string> = Identifier | ComponentCtor;

interface InputDescriptor<RT extends any = GenericRenderer, CT extends ConfigType = ConfigType> {
  name: string;
  dataType?: DataType;
  label?: string;
  render?: RT;
  config?: CT;
}

type FieldRenderer = GenericRenderer | CellRenderer<TableColumn>;

type FieldConfig = Omit<TableColumn, 'prop' | 'label' | 'render' | 'isValid'>;

interface ViewFieldDescriptor
  extends Omit<FieldDescriptor, 'dataType'>,
    InputDescriptor<FieldRenderer, FieldConfig> {}

type ActionConfig = ConfigType;

type ActionContextType = 'free' | 'single' | 'batch' | 'both';

type BuiltInActionRenderer = 'button' | 'link';

type ActionRenderer = GenericRenderer<BuiltInActionRenderer>;

interface ActionDescriptor {
  name?: string;
  context?: ActionContextType;
  authority?: string;
  text?: string;
  primary?: boolean;
  danger?: boolean;
  confirm?: boolean | string;
  render?: ActionRenderer;
  config?: ActionConfig;
  execute?: <ViewContext>(viewContext: ViewContext, vm: Vue) => Promise<any> | any;
}

interface FilterDescriptor extends InputDescriptor {}

interface SearchDescriptor {
  filters: FilterDescriptor[];
}

type ViewType = 'list' | 'object';

interface ViewDescriptor<CT = ConfigType> {
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

export {
  ConfigType,
  ColumnContext,
  CellRenderer,
  TableColumn,
  GenericRenderer,
  InputDescriptor,
  FieldRenderer,
  ViewFieldDescriptor,
  ActionContextType,
  BuiltInActionRenderer,
  ActionRenderer,
  ActionDescriptor,
  FilterDescriptor,
  SearchDescriptor,
  ViewType,
  ViewDescriptor,
  TableViewConfig,
};
