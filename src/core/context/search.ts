import { isFunction, mixin, pick } from '@ntks/toolbox';

import {
  ModelDescriptor,
  FilterDescriptor,
  SearchDescriptor,
  SearchCondition,
  SearchContextDescriptor,
  SearchContext,
} from '../typing';
import { getDefaultValue } from '../input';
import { resolveFieldMap } from '../model';

type SearchContextCreator = (descriptor: SearchContextDescriptor) => SearchContext;

let searchContextCreator: SearchContextCreator = (() => ({})) as any;

function setSearchContextCreator(creator: SearchContextCreator): void {
  if (isFunction(creator)) {
    searchContextCreator = creator;
  }
}

function resolveFilters(filters: FilterDescriptor[], model?: ModelDescriptor): FilterDescriptor[] {
  if (!model) {
    return filters;
  }

  const fieldMap = resolveFieldMap(model.fields);

  return filters.map(filter =>
    fieldMap[filter.name]
      ? (mixin(
          true,
          {},
          pick(fieldMap[filter.name], ['name', 'dataType', 'label']),
          filter,
        ) as FilterDescriptor)
      : filter,
  );
}

function resolveCondition(filters: FilterDescriptor[]): SearchCondition {
  return filters.length > 0
    ? filters.reduce((prev, filter) => ({ ...prev, [filter.name]: getDefaultValue(filter) }), {})
    : {};
}

function createSearchContext(descriptor: SearchDescriptor, model?: ModelDescriptor): SearchContext {
  const mergedFilters = resolveFilters(descriptor.filters, model);

  return searchContextCreator({
    filters: mergedFilters,
    defaultValue: resolveCondition(mergedFilters),
  });
}

export { setSearchContextCreator, createSearchContext };
