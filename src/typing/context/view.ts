import { ComponentCtor } from '../component';
import { DataValue } from '../value';
import { RequestParams, ResponseResult, ResponseSuccess, ResponseFail } from '../http';
import {
  ConfigType,
  ViewFieldDescriptor,
  ActionContextType,
  ActionDescriptor,
  SearchDescriptor,
  ViewDescriptor,
} from '../config';

import { ValueContextDescriptor, ValueContext } from './value';
import { ModuleContext } from './module';
import { SearchContext } from './search';

type ShorthandRequest<ParamsType = RequestParams> = (
  params: ParamsType,
  success?: ResponseSuccess,
  fail?: ResponseFail,
) => Promise<ResponseResult>;

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
    ObjectShorthandRequest {}

interface ViewContext<R = any, VT = any, CT = ConfigType>
  extends Pick<ModuleContext<R>, 'getComponents'>,
    ValueContext<VT> {
  getModuleContext: () => ModuleContext<R>;
  getView: () => ViewDescriptor<CT>;
  getFields: () => ViewFieldDescriptor[];
  getActions: () => ActionDescriptor[];
  getActionsByContextType: (contextType: ActionContextType) => ActionDescriptor[];
  getActionsAuthority: () => string | undefined;
  getConfig: () => Record<string, any>;
  getDataSource: () => VT;
  setDataSource: (data: VT) => void;
  getBusy: () => boolean;
  setBusy: (busy: boolean) => void;
}

interface ListViewContext<R = any, VT = any, CT = ConfigType> extends ViewContext<R, VT, CT> {
  getSearch: () => SearchDescriptor | ComponentCtor | undefined;
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

interface ObjectViewContext<R = any, VT = any, CT = ConfigType> extends ViewContext<R, VT, CT> {
  getOne: ShorthandRequest<string>;
  insert: ShorthandRequest;
  update: ShorthandRequest;
}

type KeptViewContextKeysInAction =
  | 'getModuleContext'
  | 'getView'
  | 'getValue'
  | 'execute'
  | 'on'
  | 'off'
  | 'reload'
  | 'getList'
  | 'deleteOne'
  | 'deleteList';

type ViewContextInAction<VC = ViewContext> = Omit<
  VC,
  keyof Omit<ViewContext, KeptViewContextKeysInAction>
>;

export {
  ViewContextDescriptor,
  ListShorthandRequest,
  ListViewContextDescriptor,
  ObjectShorthandRequest,
  ObjectViewContextDescriptor,
  ViewContext,
  ListViewContext,
  ObjectViewContext,
  KeptViewContextKeysInAction,
  ViewContextInAction,
};
