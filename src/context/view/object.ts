import { pick, clone } from '@ntks/toolbox';

import {
  DataValue,
  RequestParams,
  ResponseResult,
  ResponseSuccess,
  ResponseFail,
  ConfigType,
  ModuleContext,
  ListViewContext as IListViewContext,
  ObjectShorthandRequest,
  ObjectViewContextDescriptor,
  ObjectViewContext as IObjectViewContext,
} from '../../core';
import { ViewContext } from './base';

class ObjectViewContext<
    ValueType extends DataValue = DataValue,
    Config extends ConfigType = ConfigType
  >
  extends ViewContext<ValueType, Config>
  implements IObjectViewContext<ValueType, Config> {
  private readonly parent: IListViewContext | undefined;

  private readonly indexInParent: number;

  private readonly shorthandNames: ObjectShorthandRequest;

  constructor(
    moduleContext: ModuleContext,
    options: ObjectViewContextDescriptor<ValueType, Config>,
  ) {
    super(moduleContext, {
      ...options,
      defaultValue: {} as ValueType,
      initialValue: options.initialValue || ({} as ValueType),
    });

    this.parent = options.parent;
    this.indexInParent = options.indexInParent === undefined ? -1 : options.indexInParent;
    this.shorthandNames = pick(options, ['getOne', 'insert', 'update']);
  }

  public getParent(): any {
    return this.parent;
  }

  public getIndexInParent(): number {
    return this.indexInParent;
  }

  public setDataSource(data: ValueType): void {
    const copy = clone(data);

    super.setDataSource(copy);

    this.emit('dataChange', data);
  }

  public getOne(
    params: string,
    success?: ResponseSuccess,
    fail?: ResponseFail,
  ): Promise<ResponseResult> {
    return this.getModuleContext().execute(
      this.shorthandNames.getOne || 'getOne',
      params,
      success,
      fail,
    );
  }

  public insert(
    params: RequestParams,
    success?: ResponseSuccess,
    fail?: ResponseFail,
  ): Promise<ResponseResult> {
    return this.getModuleContext().execute(
      this.shorthandNames.insert || 'insert',
      params,
      success,
      fail,
    );
  }

  public update(
    params: RequestParams,
    success?: ResponseSuccess,
    fail?: ResponseFail,
  ): Promise<ResponseResult> {
    return this.getModuleContext().execute(
      this.shorthandNames.update || 'update',
      params,
      success,
      fail,
    );
  }
}

export { ObjectViewContext };
