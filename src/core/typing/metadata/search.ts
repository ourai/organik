import { ComponentCtor } from '../component';
import { ConfigType, InputDescriptor } from './base';

interface FilterDescriptor extends InputDescriptor {
  hidden?: boolean;
}

interface SearchDescriptor<CT extends ConfigType = ConfigType> {
  filters: (FilterDescriptor | string)[];
  config?: CT;
}

type SearchComponentRenderer = SearchDescriptor | ComponentCtor;

export { FilterDescriptor, SearchDescriptor, SearchComponentRenderer };
