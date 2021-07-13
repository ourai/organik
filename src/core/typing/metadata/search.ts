import { ComponentCtor } from '../component';
import { InputDescriptor } from './base';

interface FilterDescriptor extends InputDescriptor {}

interface SearchDescriptor {
  filters: FilterDescriptor[];
}

type SearchRenderer = SearchDescriptor | ComponentCtor;

export { FilterDescriptor, SearchDescriptor, SearchRenderer };
