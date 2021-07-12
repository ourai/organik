import { InputDescriptor } from './base';

interface FilterDescriptor extends InputDescriptor {}

interface SearchDescriptor {
  filters: FilterDescriptor[];
}

export { FilterDescriptor, SearchDescriptor };
