import { mixin, clone, pick } from '@ntks/toolbox';

import {
  ModelDescriptor,
  ViewFieldDescriptor,
  ActionContextType,
  ActionDescriptor,
  ServerActionExecutor,
  ModuleContext,
  ValueContextDescriptor,
  ViewContextDescriptor,
  ViewContext,
} from '../../typing';
import { resolveFieldMap } from '../../model';
import { resolveAction } from '../../action';
import { createValueContext } from '../value';

function resolveFields(
  fields: ViewFieldDescriptor[],
  model?: ModelDescriptor,
): ViewFieldDescriptor[] {
  if (!model) {
    return fields;
  }

  const fieldMap = resolveFieldMap(model.fields);

  return fields.map(field =>
    fieldMap[field.name]
      ? (mixin(true, {}, fieldMap[field.name], field) as ViewFieldDescriptor)
      : field,
  );
}

function createGenericViewContext<VT, CT>(
  moduleContext: ModuleContext,
  options: ViewContextDescriptor<VT, CT>,
): Omit<ViewContext<VT, CT>, 'getDataSource' | 'setDataSource'> {
  const mergedFields = resolveFields(options.fields, moduleContext.getModel());
  const actions = (options.actions || [])
    .map(resolveAction)
    .filter(action => !!action) as ActionDescriptor[];
  const actionContextGroups = {} as Record<ActionContextType, ActionDescriptor[]>;

  actions.forEach(action => {
    const contextType = action.context || 'single';

    if (!actionContextGroups[contextType]) {
      actionContextGroups[contextType] = [] as ActionDescriptor[];
    }

    actionContextGroups[contextType].push(action);
  });

  const valueContext = createValueContext(
    pick(options, ['defaultValue', 'initialValue']) as ValueContextDescriptor<VT>,
  );

  let loading: boolean = false;

  return {
    ...valueContext,
    getModuleContext: () => moduleContext,
    getComponents: moduleContext.getComponents,
    getView: () => options,
    getFields: () => clone(mergedFields) as ViewFieldDescriptor[],
    getActions: () => actions,
    getActionsByContextType: (contextType: ActionContextType) => actionContextGroups[contextType],
    getActionsAuthority: () => options.actionsAuthority,
    getConfig: () => (options.config || {}) as CT,
    getBusy: () => loading,
    setBusy: (busy: boolean) => {
      loading = busy;
      valueContext.emit('busyChange', busy);
    },
  };
}

function resolvePartialContext<
  ViewContextDescriptor,
  SpecificViewContext,
  SpecificActionName extends keyof SpecificViewContext
>(
  executor: ServerActionExecutor,
  options: ViewContextDescriptor,
  actionNames: SpecificActionName[],
): Pick<SpecificViewContext, SpecificActionName> {
  const actionMap = actionNames.reduce(
    (prev, key) => ({ ...prev, [key]: executor.bind(null, key as any) }),
    {},
  ) as Pick<SpecificViewContext, SpecificActionName>;

  Object.keys(pick(options, actionNames as string[])).forEach(key => {
    actionMap[key] = executor.bind(null, options[key] as any);
  });

  return actionMap;
}

export { createGenericViewContext, resolvePartialContext };
