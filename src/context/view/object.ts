import { pick, clone } from '@ntks/toolbox';

import {
  DataValue,
  RequestParams,
  ResponseResult,
  ResponseSuccess,
  ResponseFail,
  ConfigType,
  ViewFieldDescriptor,
  ModuleContext,
  ListViewContext as IListViewContext,
  ObjectShorthandRequest,
  ObjectViewContextDescriptor,
  ObjectViewContext as IObjectViewContext,
  isDataValueValid,
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

  private readonly fieldMap: { [key: string]: ViewFieldDescriptor };

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
    this.fieldMap = this.getFields().reduce(
      (prev, field) => ({ ...prev, [field.name]: field }),
      {},
    );
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

  public getFieldValue<FV extends DataValue = DataValue>(name: string): FV | undefined {
    return this.getValue()[name];
  }

  public setFieldValue<FV>(name: string, value: FV): void {
    const field = this.fieldMap[name];

    if (field === undefined || !isDataValueValid(field.dataType!, value)) {
      return;
    }

    this.setValue({ ...(this.getValue() as any), [name]: value });
    this.emit('fieldChange', { name, value });
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
