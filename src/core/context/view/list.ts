import { isPlainObject } from '@ntks/toolbox';

import {
  Pagination,
  SearchDescriptor,
  ModuleContext,
  SearchCondition,
  SearchContext,
  ListViewContextDescriptor,
  ListShorthandRequest,
  ListViewContext,
  ObjectViewContext,
} from '../../typing';
import { createSearchContext } from '../search';
import { createGenericViewContext, resolvePartialContext } from './base';
import { createObjectViewContext } from './object';

function resolveListRequestParams(
  condition: SearchCondition,
  currentPage: number | undefined,
  currentPageSize: number | undefined,
): SearchCondition & Pagination {
  const params = { ...condition } as SearchCondition & Pagination;

  if (currentPage) {
    params.pageNum = currentPage;
  }

  if (currentPageSize) {
    params.pageSize = currentPageSize;
  }

  return params;
}

function createListViewContext<VT, CT>(
  moduleContext: ModuleContext,
  options: ListViewContextDescriptor<VT, CT>,
): ListViewContext<VT, CT> {
  const ctx = {
    ...createGenericViewContext<VT, CT>(moduleContext, { ...options, defaultValue: [] as any }),
    ...resolvePartialContext<
      ListViewContextDescriptor<VT, CT>,
      ListViewContext<VT, CT>,
      keyof ListShorthandRequest
    >(moduleContext.execute, options, ['getList', 'deleteOne', 'deleteList']),
  };

  const search = options.search;

  let searchCondition = {} as SearchCondition;
  let conditionInited = !search;

  let dataSource: VT = [] as any;
  let dataSourceInited = false;

  let children: ObjectViewContext[] = [];

  const setDataSource = (data: VT) => {
    dataSource = data;
    children = (data as any).map(record =>
      createObjectViewContext(ctx.getModuleContext(), {
        name: `ObjectViewIn${options.name}`,
        category: 'object',
        render: '',
        fields: ctx.getFields(),
        initialValue: record,
        parent: ctx as any,
      }),
    );

    if (!dataSourceInited) {
      dataSourceInited = true;
    }

    ctx.emit('dataChange', data);
  };

  let totalPage: number;
  let currentPage: number;
  let currentPageSize: number;

  const setTotal = (total: number) => {
    totalPage = total;
    ctx.emit('totalChange', total);
  };

  const loadData = async () => {
    if (!conditionInited) {
      return;
    }

    ctx.setBusy(true);

    ctx
      .getList(
        resolveListRequestParams(searchCondition, currentPage, currentPageSize),
        (data, { pageNum, pageSize, total }) => {
          setDataSource(data);
          setTotal(total);

          if (currentPage !== pageNum) {
            currentPage = pageNum;
            ctx.emit('currentPageChange', pageNum);
          }

          if (currentPageSize !== pageSize) {
            currentPageSize = pageSize;
            ctx.emit('pageSizeChange', pageSize);
          }
        },
      )
      .finally(() => ctx.setBusy(false));
  };

  let searchContext: SearchContext | undefined;

  if (isPlainObject(search)) {
    searchContext = createSearchContext(search as SearchDescriptor, moduleContext.getModel());

    searchContext.on({
      change: value => (searchCondition = value),
      filterChange: ({ name, value }) => (searchCondition[name] = value),
      ready: () => {
        conditionInited = true;
        loadData();
      },
      submit: loadData,
      reset: loadData,
    });
  }

  const setCurrentPage = (current: number) => {
    currentPage = current;
    loadData();
  };

  const setPageSize = (pageSize: number) => {
    currentPageSize = pageSize;
    loadData();
  };

  const extra = {
    getChildren: () => children,
    getDataSource: () => dataSource,
    setDataSource,
    getSearch: () => search,
    getSearchContext: () => searchContext,
    getTotal: () => totalPage,
    getCurrentPage: () => currentPage,
    setCurrentPage,
    getPageSize: () => currentPageSize,
    setPageSize,
    load: loadData,
    reload: loadData,
  } as Partial<ListViewContext<VT, CT>>;

  Object.keys(extra).forEach(key => (ctx[key] = extra[key]));

  return ctx as ListViewContext<VT, CT>;
}

export { createListViewContext };
