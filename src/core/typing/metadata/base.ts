import { ComponentCtor } from '../component';
import { DataType } from '../data-type';

type ConfigType = Record<string, any>;

type GenericRenderer<Identifier extends string = string> = Identifier | ComponentCtor;

interface InputDescriptor<RT extends any = GenericRenderer, CT extends ConfigType = ConfigType> {
  name: string;
  dataType?: DataType;
  label?: string;
  required?: boolean;
  render?: RT;
  config?: CT;
}

export { ConfigType, GenericRenderer, InputDescriptor };
