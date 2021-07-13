import { clone, pick } from '@ntks/toolbox';

import {
  ComponentCtor,
  DataValue,
  ConfigType,
  ActionContextType,
  ActionDescriptor,
  ActionGroupByContext,
  ViewFieldDescriptor,
  ViewDescriptor,
  ModuleContext,
  ValueContextDescriptor,
  ViewContextDescriptor,
  ViewContext as IViewContext,
  resolveAction,
  resolveFields,
} from '../../core';
import { ValueContext } from '../value';

class ViewContext<ValueType extends DataValue = DataValue, Config extends ConfigType = ConfigType>
  extends ValueContext<ValueType>
  implements IViewContext<ValueType, Config> {
  private readonly moduleContext: ModuleContext;

  private readonly options: ViewContextDescriptor<ValueType, Config>;

  private readonly fields: ViewFieldDescriptor[];

  private readonly actions: ActionDescriptor[];

  protected readonly actionContextGroups: ActionGroupByContext;

  private dataSource: ValueType;

  private busy: boolean = false;

  constructor(moduleContext: ModuleContext, options: ViewContextDescriptor<ValueType, Config>) {
    super(pick(options, ['defaultValue', 'initialValue']) as ValueContextDescriptor<ValueType>);

    this.moduleContext = moduleContext;
    this.options = options;
    this.fields = resolveFields(options.fields, moduleContext.getModel());

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

    this.actions = actions;
    this.actionContextGroups = actionContextGroups;

    this.dataSource = clone(options.initialValue || options.defaultValue);
  }

  public getModuleContext(): ModuleContext {
    return this.moduleContext;
  }

  public getComponents(): Record<string, ComponentCtor> {
    return this.moduleContext.getComponents();
  }

  public getView(): ViewDescriptor<Config> {
    return this.options;
  }

  public getFields(): ViewFieldDescriptor[] {
    return clone(this.fields);
  }

  public getActions(): ActionDescriptor[] {
    return this.actions;
  }

  public getActionsByContextType(contextType: ActionContextType): ActionDescriptor[] {
    return this.actionContextGroups[contextType];
  }

  public getActionsAuthority(): string | undefined {
    return this.options.actionsAuthority;
  }

  public getConfig(): Config {
    return (this.options.config || {}) as Config;
  }

  public getDataSource(): ValueType {
    return this.dataSource;
  }

  public setDataSource(data: ValueType): void {
    this.dataSource = data;
  }

  public getBusy(): boolean {
    return this.busy;
  }

  public setBusy(busy: boolean): void {
    this.busy = busy;
    this.emit('busyChange', busy);
  }
}

export { ViewContext };
