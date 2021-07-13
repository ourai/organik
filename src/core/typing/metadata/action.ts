import { ConfigType, GenericRenderer } from './base';

type ActionConfig = ConfigType;

type ActionType = 'server' | 'client';

type ActionContextType = 'free' | 'single' | 'batch' | 'both';

type BuiltInActionRenderer = 'button' | 'link';

type ActionRenderer = GenericRenderer<BuiltInActionRenderer>;

interface ActionDescriptor {
  name?: string;
  type?: ActionType;
  context?: ActionContextType;
  authority?: string;
  text?: string;
  primary?: boolean;
  danger?: boolean;
  confirm?: boolean | string;
  render?: ActionRenderer;
  config?: ActionConfig;
  execute?: <ViewContext>(viewContext: ViewContext, vm: any) => Promise<any> | any;
}

interface ServerAction extends ActionDescriptor {
  type: 'server';
  execute: <RT, PT>(params?: PT) => Promise<RT>;
}

interface ClientAction extends ActionDescriptor {
  type: 'client';
}

type ActionGroupByContext = Record<ActionContextType, ActionDescriptor[]>;

export {
  ActionType,
  ActionContextType,
  BuiltInActionRenderer,
  ActionRenderer,
  ActionDescriptor,
  ServerAction,
  ClientAction,
  ActionGroupByContext,
};
