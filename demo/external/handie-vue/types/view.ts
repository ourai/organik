import { GenericRenderer } from 'organik';

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

export { ColumnContext, CellRenderer, TableColumn, FieldRenderer, FieldConfig, TableViewConfig };
