import { ComponentCtor } from '../component';
import { InputDescriptor } from './base';

interface FilterDescriptor extends InputDescriptor {}

interface SearchDescriptor {
  filters: (FilterDescriptor | string)[];
}

type SearchComponentRenderer = SearchDescriptor | ComponentCtor;

export { FilterDescriptor, SearchDescriptor, SearchComponentRenderer };
