import { mixin, clone, pick } from '@ntks/toolbox';

import {
  ModelDescriptor,
  ViewFieldDescriptor,
  ActionContextType,
  ActionDescriptor,
  RepositoryExecutor,
  ModuleContext,
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

function createGenericViewContext<R, VT, CT>(
  moduleContext: ModuleContext<R>,
  options: ViewContextDescriptor<VT, CT>,
): Omit<ViewContext<R, VT, CT>, 'getDataSource' | 'setDataSource'> {
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

  const valueContext = createValueContext({ defaultValue: options.defaultValue });

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
  R,
  ViewContextDescriptor,
  SpecificViewContext,
  SpecificActionName extends keyof SpecificViewContext
>(
  executor: RepositoryExecutor<keyof R>,
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
