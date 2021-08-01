import { ValueChecker, ObjectViewContext } from 'organik';
import Vue from 'vue';
import { Component, Prop, Inject } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../types/view';

@Component
export default class FieldWidget<ValueType = any> extends Vue {
  @Inject({ from: 'viewContext', default: null })
  private readonly context!: ObjectViewContext;

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
