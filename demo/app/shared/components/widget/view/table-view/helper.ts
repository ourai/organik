import { VueConstructor, CreateElement } from 'vue';

import {
  ColumnContext,
  CellRenderer,
  FieldRenderer,
  TableColumn,
  ActionDescriptor,
  TableViewConfig,
  ListViewContext,
} from '../../../../types';
import { isBoolean, isNumber, isFunction, omit } from '../../../../utils';
import ActionRenderer from '../../../renderer/action-renderer';
import { DataTableProps } from './typing';

function resolveCellRenderer(renderer: FieldRenderer): CellRenderer<TableColumn> {
  if (isFunction(renderer)) {
    return (renderer as any).extendOptions
      ? (h: CreateElement, data: ColumnContext<TableColumn>) =>
          h(renderer as VueConstructor, { props: { value: data.row[data.column.prop!], ...data } })
      : (renderer as CellRenderer<TableColumn>);
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

  const actions = resolveAuthorizedActions(
    context.getActionsByContextType('single'),
    actionsAuthority,
    authority,
  );

  const col: TableColumn = {
    label: '操作',
    render: (h, { index }) => {
      return h(
        'div',
        actions.map(action =>
          h(ActionRenderer, {
            props: {
              action,
              contextGetter: () => context.getChildren()[index],
            },
          }),
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

  return isActionsAuthorized(actionsAuthority, authority) && actions.length > 0 ? col : null;
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
