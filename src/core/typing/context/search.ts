import { FilterDescriptor, SearchDescriptor } from '../metadata';
import { ValueContextDescriptor, ValueEvents, ValueContext } from './value';

type SearchCondition = Record<string, any>;

type SearchEvents = ValueEvents | 'filterChange';

interface SearchContextDescriptor
  extends SearchDescriptor,
    ValueContextDescriptor<SearchCondition> {}

interface SearchContext extends ValueContext<SearchCondition, SearchEvents> {
  getFilters: () => FilterDescriptor[];
  getFilterValue: <FV>(name: string) => FV | undefined;
  setFilterValue: <FV>(name: string, value: FV) => void;
}

export { SearchCondition, SearchEvents, SearchContextDescriptor, SearchContext };
