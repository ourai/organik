import { ConfigType, ComponentRenderer } from './base';

type ActionConfig = ConfigType;

type ActionCategory = 'server' | 'client';

type ActionContextType = 'free' | 'single' | 'batch' | 'both';

type BuiltInActionComponentRenderer = 'button' | 'link';

type ActionComponentRenderer = ComponentRenderer<BuiltInActionComponentRenderer>;

interface ActionDescriptor {
  name?: string;
  category?: ActionCategory;
  type?: string;
  context?: ActionContextType;
  authority?: string;
  text?: string;
  primary?: boolean;
  danger?: boolean;
  confirm?: boolean | string;
  render?: ActionComponentRenderer;
  config?: ActionConfig;
  execute?: <ViewContext>(viewContext: ViewContext, vm: any) => Promise<any> | any;
}

interface ServerAction extends ActionDescriptor {
  category: 'server';
  execute: <RT, PT>(params?: PT) => Promise<RT>;
}

interface ClientAction extends ActionDescriptor {
  category: 'client';
  available?: string;
}

type ActionGroupByContext = Record<ActionContextType, ClientAction[]>;

export {
  ActionCategory,
  ActionContextType,
  BuiltInActionComponentRenderer,
  ActionComponentRenderer,
  ActionDescriptor,
  ServerAction,
  ClientAction,
  ActionGroupByContext,
};
