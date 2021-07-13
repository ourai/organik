import { DataValue } from '../value';
import { RequestParams, ResponseResult, ResponseSuccess, ResponseFail } from '../http';
import {
  ConfigType,
  ViewFieldDescriptor,
  ActionContextType,
  ActionDescriptor,
  SearchRenderer,
  ViewDescriptor,
} from '../metadata';

import { ValueContextDescriptor, ValueContext } from './value';
import { ModuleContext } from './module';
import { SearchContext } from './search';

type ShorthandRequest<ParamsType = RequestParams> = (
  params: ParamsType,
  success?: ResponseSuccess,
  fail?: ResponseFail,
) => Promise<ResponseResult>;

interface ViewContext<VT = any, CT = ConfigType>
  extends Pick<ModuleContext, 'getComponents'>,
    ValueContext<VT> {
  getModuleContext: () => ModuleContext;
  getView: () => ViewDescriptor<CT>;
  getFields: () => ViewFieldDescriptor[];
  getActions: () => ActionDescriptor[];
  getActionsByContextType: (contextType: ActionContextType) => ActionDescriptor[];
  getActionsAuthority: () => string | undefined;
  getConfig: () => CT;
  getDataSource: () => VT;
  setDataSource: (data: VT) => void;
  getBusy: () => boolean;
  setBusy: (busy: boolean) => void;
}

interface InternalListViewContext<Child, VT = any, CT = ConfigType> extends ViewContext<VT, CT> {
  getChildren: () => Child[];
  getSearch: () => SearchRenderer | undefined;
  getSearchContext: () => SearchContext | undefined;
  getTotal: () => number;
  getCurrentPage: () => number;
  setCurrentPage: (current: number) => void;
  getPageSize: () => number;
  setPageSize: (size: number) => void;
  load: () => Promise<any>;
  reload: () => Promise<any>;
  getList: ShorthandRequest;
  deleteOne: ShorthandRequest<string | Record<string, any>>;
  deleteList: ShorthandRequest<string[] | Record<string, any>>;
}

interface InternalObjectViewContext<Parent, VT = any, CT = ConfigType> extends ViewContext<VT, CT> {
  getParent: () => Parent | undefined;
  getIndexInParent: () => number;
  getOne: ShorthandRequest<string>;
  insert: ShorthandRequest;
  update: ShorthandRequest;
}

interface ListViewContext<VT = any, CT = ConfigType>
  extends InternalListViewContext<
    InternalObjectViewContext<ListViewContext<VT, CT>, VT, CT>,
    VT,
    CT
  > {}

interface ObjectViewContext<VT = any, CT = ConfigType>
  extends InternalObjectViewContext<
    InternalListViewContext<ObjectViewContext<VT, CT>, VT, CT>,
    VT,
    CT
  > {}

interface ViewContextDescriptor<
  VT extends DataValue = DataValue,
  CT extends ConfigType = ConfigType
> extends ViewDescriptor<CT>,
    ValueContextDescriptor<VT> {}

interface ListShorthandRequest {
  getList?: string;
  deleteOne?: string;
  deleteList?: string;
}

interface ListViewContextDescriptor<
  VT extends DataValue = DataValue,
  CT extends ConfigType = ConfigType
> extends Omit<ViewContextDescriptor<VT, CT>, 'defaultValue'>,
    ListShorthandRequest {}

interface ObjectShorthandRequest {
  insert?: string;
  update?: string;
  getOne?: string;
}

interface ObjectViewContextDescriptor<
  VT extends DataValue = DataValue,
  CT extends ConfigType = ConfigType
> extends Omit<ViewContextDescriptor<VT, CT>, 'defaultValue'>,
    ObjectShorthandRequest {
  parent?: ListViewContext<VT, CT>;
  indexInParent?: number;
}

export {
  ViewContextDescriptor,
  ListShorthandRequest,
  ListViewContextDescriptor,
  ObjectShorthandRequest,
  ObjectViewContextDescriptor,
  ViewContext,
  ListViewContext,
  ObjectViewContext,
};
