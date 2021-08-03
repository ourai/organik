import { ValueChecker, ObjectViewContext } from 'organik';
import { Component, Prop, Inject } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../../types/input';
import BaseWidget from '../BaseWidget';

@Component
export default class FieldWidget<ValueType = any> extends BaseWidget {
  @Inject({ from: 'viewContext', default: null })
  protected readonly context!: ObjectViewContext;

  @Prop({ type: Object, default: () => ({}) })
  protected readonly field!: ViewFieldDescriptor;

  @Prop()
  protected readonly value!: ValueType;

  protected setValueChecker(checker: ValueChecker): void {
    this.context.setFieldChecker(this.field.name, checker);
  }

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }
}
