import { pick, clone } from '@ntks/toolbox';

import {
  DataValue,
  RequestParams,
  ResponseResult,
  ResponseSuccess,
  ResponseFail,
  ConfigType,
  Validator,
  ValueChecker,
  ModuleContext,
  ListViewContext as IListViewContext,
  ObjectShorthandRequest,
  ObjectViewContextDescriptor,
  ObjectViewContext as IObjectViewContext,
  createInputValidator,
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

  private readonly validatorMap: { [key: string]: Validator };

  private invalidFieldMap: { [key: string]: boolean } = {};

  private modified: boolean = false;

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

    this.validatorMap = this.getFields().reduce(
      (prev, field) => ({ ...prev, [field.name]: createInputValidator(field) }),
      {},
    );
  }

  public getParent(): any {
    return this.parent;
  }

  public getIndexInParent(): number {
    return this.indexInParent;
  }

  public setDataSource(data: ValueType): void {
    this.modified = false;

    const copy = clone(data);

    super.setDataSource(copy);

    this.emit('dataChange', data);
  }

  public setValue(value: ValueType): void {
    this.modified = true;

    super.setValue(value);
  }

  public getFieldValue<FV extends DataValue = DataValue>(name: string): FV | undefined {
    return this.getValue()[name];
  }

  public setFieldValue<FV>(name: string, value: FV): void {
    const validator = this.validatorMap[name];

    if (validator === undefined) {
      return;
    }

    const validationResult = validator.validate(value);

    if (validationResult.success) {
      delete this.invalidFieldMap[name];
    } else {
      this.invalidFieldMap[name] = true;
    }

    this.emit('fieldValidate', { name, result: validationResult });
    this.setValue({ ...(this.getValue() as any), [name]: value });
    this.emit('fieldChange', { name, value });
  }

  public setFieldChecker(name: string, checker: ValueChecker): void {
    if (!this.validatorMap[name]) {
      return;
    }

    this.validatorMap[name].addChecker(checker);
  }

  public isModified(): boolean {
    return this.modified;
  }

  public submit(): void {
    if (Object.keys(this.invalidFieldMap).length > 0) {
      return;
    }

    this.modified = false;

    super.submit();
  }

  public reset(): void {
    this.invalidFieldMap = {};
    this.modified = false;

    super.reset();
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
