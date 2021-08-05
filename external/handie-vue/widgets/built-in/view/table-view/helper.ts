import { isBoolean, isNumber, isFunction, omit } from '@ntks/toolbox';
import { ActionDescriptor, ListViewContext, getRenderer } from 'organik';
import { VueConstructor, CreateElement } from 'vue';

import {
  ColumnContext,
  CellComponentRenderer,
  FieldComponentRenderer,
  TableColumn,
  TableViewConfig,
} from '../../../../types';
import { DataTableProps } from './typing';

function resolveCellRenderer(renderer: FieldComponentRenderer): CellComponentRenderer<TableColumn> {
  if (isFunction(renderer)) {
    return (renderer as any).extendOptions
      ? (h: CreateElement, data: ColumnContext<TableColumn>) =>
          h(renderer as VueConstructor, { props: { value: data.row[data.column.prop!], ...data } })
      : (renderer as CellComponentRenderer<TableColumn>);
  }

  return (h: CreateElement) => h('div');
}

function isActionsAuthorized(
  actionsAuthority: string | undefined,
  authority: Record<string, boolean> | null,
): boolean {
  if (!actionsAuthority) {
    return true;
  }

  return authority ? !!authority[actionsAuthority] : false;
}

function resolveAuthorizedActions(
  actions: ActionDescriptor[],
  actionsAuthority: string | undefined,
  authority: Record<string, boolean> | null,
): ActionDescriptor[] {
  if (actionsAuthority) {
    return actions;
  }

  if (!authority) {
    return [];
  }

  return actions.filter(({ authority: auth }) => !auth || !!authority[auth]);
}

function resolveOperationColumn(
  context: ListViewContext,
  authority: Record<string, boolean> | null,
): TableColumn | null {
  const actionsAuthority = context.getActionsAuthority();

  const allSingleActions = resolveAuthorizedActions(
    context.getActionsByContextType('single'),
    actionsAuthority,
    authority,
  );

  const col: TableColumn = {
    label: '操作',
    render: (h, { index }) => {
      const ctx = context.getChildren()[index];

      return h(
        'div',
        resolveAuthorizedActions(ctx.getActions(), actionsAuthority, authority).map(action =>
          h(getRenderer('ActionRenderer'), { props: { action, contextGetter: () => ctx } }),
        ),
      );
    },
  };
  const { operationColumnWidth } = context.getConfig() as TableViewConfig;

  if (operationColumnWidth) {
    col.width = isNumber(operationColumnWidth)
      ? `${operationColumnWidth}px`
      : (operationColumnWidth as string);
  }

  return isActionsAuthorized(actionsAuthority, authority) && allSingleActions.length > 0
    ? col
    : null;
}

function resolveTableColumns(
  context: ListViewContext,
  authority: Record<string, boolean> | null,
): TableColumn[] {
  const cols: TableColumn[] = context.getFields().map(({ name, label, render, config = {} }) => ({
    prop: name,
    label,
    render: render ? resolveCellRenderer(render) : undefined,
    ...config,
  }));
  const actionsAuthority = context.getActionsAuthority();

  const checkableActions = isActionsAuthorized(actionsAuthority, authority)
    ? resolveAuthorizedActions(
        ([] as ActionDescriptor[]).concat(
          context.getActionsByContextType('batch') || [],
          context.getActionsByContextType('both') || [],
        ),
        actionsAuthority,
        authority,
      )
    : [];
  const checkableConfig = (context.getConfig() as TableViewConfig).checkable;

  if ((isBoolean(checkableConfig) ? checkableConfig : true) && checkableActions.length > 0) {
    cols.unshift({ type: 'selection', width: '55', align: 'center' });
  }

  const operationCol = resolveOperationColumn(context, authority);

  if (operationCol) {
    cols.push(operationCol);
  }

  return cols;
}

function resolveTableProps(
  context: ListViewContext,
  authority: Record<string, boolean> | null,
): DataTableProps {
  return {
    ...omit(context.getConfig(), ['checkable']),
    columns: resolveTableColumns(context, authority),
  };
}

export { isActionsAuthorized, resolveAuthorizedActions, resolveTableProps };
