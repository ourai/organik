import { ViewFieldDescriptor, ObjectViewContext } from 'organik';
import { Component } from 'vue-property-decorator';

import ViewWidget from './View';

@Component
export default class ObjectViewWidget extends ViewWidget<ObjectViewContext> {
  protected dataSource: Record<string, any> = {};

  protected value: Record<string, any> = {};

  protected get fields(): ViewFieldDescriptor[] {
    return this.context.getFields();
  }

  protected onFieldValueChange(fieldName: string, value: any): void {
    this.context.setValue({ ...this.context.getValue(), [fieldName]: value });
  }

  protected created(): void {
    this.on({
      dataChange: dataSource => {
        this.dataSource = dataSource;
        this.context.setValue(dataSource);
      },
      change: value => (this.value = value),
    });
  }
}
