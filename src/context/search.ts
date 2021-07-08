import { isPlainObject, clone, mixin, pick } from '@ntks/toolbox';

import {
  ModelDescriptor,
  FilterDescriptor,
  SearchDescriptor,
  SearchCondition,
  SearchEvents,
  SearchContext,
} from '../typing';
import { getDataType } from '../data-type';
import { getDefaultValue, createValueChecker } from '../input';
import { resolveFieldMap } from '../model';
import { createValueContext } from './value';

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
  const getFilters = () => clone(mergedFilters) as FilterDescriptor[];
  const filterMap = getFilters().reduce(
    (prev, filter) => ({ ...prev, [filter.name]: filter }),
    {},
  ) as { [key: string]: FilterDescriptor };
  const defaultValue = resolveCondition(getFilters());
  const valueContext = createValueContext<SearchCondition, SearchEvents>({
    defaultValue,
  });

  let searchCondition = defaultValue;

  valueContext.on('change', value => (searchCondition = value));

  const setValue = (value: SearchCondition) => {
    if (!isPlainObject(value)) {
      return;
    }

    valueContext.setValue(value);
  };

  return {
    ...valueContext,
    getFilters,
    setValue,
    getFilterValue: (name: string) => searchCondition[name],
    setFilterValue: createValueChecker(filterMap, <FV>(name: string, value: FV) => {
      valueContext.setValue({ ...searchCondition, [name]: value });
      valueContext.emit('filterChange', { name, value });
    }),
  };
}

export { createSearchContext };
