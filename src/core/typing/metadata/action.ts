import { RenderType } from '../render-type';
import { ConfigType, ComponentRenderer, ContextExpression } from './base';

type ActionCategory = 'server' | 'client';

type ActionContextType = 'free' | 'single' | 'batch' | 'both';

type ActionAuthorityGetter = (...args: any[]) => string;

interface ActionDescriptor<CT extends ConfigType = ConfigType> {
  name?: string;
  category?: ActionCategory;
  type?: string;
  context?: ActionContextType;
  authority?: string | ActionAuthorityGetter;
  text?: string;
  primary?: boolean;
  danger?: boolean;
  confirm?: boolean | string;
  renderType?: RenderType;
  widget?: ComponentRenderer;
  config?: CT;
  execute?: <ViewContext>(viewContext: ViewContext, vm: any) => Promise<any> | any;
}

interface ServerAction extends ActionDescriptor {
  category: 'server';
  execute: <RT, PT>(params?: PT) => Promise<RT>;
}

interface ClientAction<CT extends ConfigType = ConfigType> extends ActionDescriptor<CT> {
  category: 'client';
  available?: ContextExpression;
}

type ActionGroupByContext = Record<ActionContextType, ClientAction[]>;

export {
  ActionCategory,
  ActionContextType,
  ActionAuthorityGetter,
  ActionDescriptor,
  ServerAction,
  ClientAction,
  ActionGroupByContext,
};
