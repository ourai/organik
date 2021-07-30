import { ViewFieldDescriptor, ObjectViewContext } from 'organik';
import { Component } from 'vue-property-decorator';

import ViewWidget from './View';

@Component
export default class ObjectViewWidget extends ViewWidget<ObjectViewContext> {
  protected dataSource: any = {};

  protected get fields(): ViewFieldDescriptor[] {
    return this.context.getFields();
  }

  protected created(): void {
    this.on('dataChange', dataSource => (this.dataSource = dataSource));
  }
}
