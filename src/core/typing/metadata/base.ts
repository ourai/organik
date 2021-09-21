import { ComponentCtor } from '../component';
import { DataType } from '../data-type';
import { RenderType } from '../render-type';

type ConfigType = Record<string, any>;

type ComponentRenderer<Identifier extends string = string> = Identifier | ComponentCtor;

type ContextExpression = string;

interface InputDescriptor<WT extends any = ComponentRenderer, CT extends ConfigType = ConfigType> {
  name: string;
  dataType?: DataType;
  label?: string;
  required?: boolean | ContextExpression;
  renderType?: RenderType;
  widget?: WT;
  config?: CT;
}

export { ConfigType, ComponentRenderer, ContextExpression, InputDescriptor };
