import { ComponentCtor } from '../component';
import { InputDescriptor } from './base';

interface FilterDescriptor extends InputDescriptor {
  hidden?: boolean;
}

interface SearchDescriptor {
  filters: (FilterDescriptor | string)[];
}

type SearchComponentRenderer = SearchDescriptor | ComponentCtor;

export { FilterDescriptor, SearchDescriptor, SearchComponentRenderer };
