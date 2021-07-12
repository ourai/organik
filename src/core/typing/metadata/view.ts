import { ComponentCtor, ComponentGetter } from '../component';
import { ConfigType, GenericRenderer, InputDescriptor } from './base';
import { FieldDescriptor } from './model';
import { ActionDescriptor } from './action';
import { SearchDescriptor } from './search';

interface ViewFieldDescriptor<RT extends any = GenericRenderer, CT extends ConfigType = ConfigType>
  extends Omit<FieldDescriptor, 'dataType'>,
    InputDescriptor<RT, CT> {}

type ViewCategory = 'list' | 'object';

interface ViewDescriptor<CT extends ConfigType = ConfigType> {
  name: string;
  category?: ViewCategory;
  render: GenericRenderer;
  fields: ViewFieldDescriptor[];
  actions?: (ActionDescriptor | string)[];
  actionsAuthority?: string;
  search?: SearchDescriptor | ComponentCtor;
  config?: CT;
}

type ViewRenderer<CT extends ConfigType = ConfigType> =
  | ViewDescriptor<CT>
  | ComponentCtor
  | ComponentGetter;

export { ViewFieldDescriptor, ViewCategory, ViewDescriptor, ViewRenderer };
