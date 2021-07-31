import { ValidationResult, ViewFieldDescriptor, ObjectViewContext } from 'organik';
import { Component } from 'vue-property-decorator';

import ViewWidget from './View';

@Component
export default class ObjectViewWidget extends ViewWidget<ObjectViewContext> {
  protected dataSource: Record<string, any> = {};

  protected value: Record<string, any> = {};

  protected validation: Record<string, ValidationResult> = {};

  protected get fields(): ViewFieldDescriptor[] {
    return this.context.getFields();
  }

  protected onFieldValueChange(fieldName: string, value: any): void {
    this.context.setFieldValue(fieldName, value);
  }

  protected created(): void {
    this.on({
      dataChange: dataSource => {
        this.dataSource = dataSource;
        this.context.setValue(dataSource);
      },
      fieldValidate: ({ name, result }) =>
        (this.validation = { ...this.validation, [name]: result }),
      change: value => (this.value = value),
    });
  }
}
