import { ValueChecker, EventHandler, EventHandlers, ObjectViewContext } from 'organik';
import Vue from 'vue';
import { Component, Prop, Inject } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../../types/input';
import { getEventWithNamespace, resolveBindEvent } from '../helper';

@Component
export default class FieldWidget<ValueType = any> extends Vue {
  @Inject({ from: 'viewContext', default: null })
  private readonly context!: ObjectViewContext;

  @Prop({ type: Object, default: () => ({}) })
  protected readonly field!: ViewFieldDescriptor;

  @Prop()
  protected readonly value!: ValueType;

  protected on(event: string | EventHandlers, handler?: EventHandler): void {
    this.context.on(resolveBindEvent(this, event), handler);
  }

  protected off(event?: string, handler?: EventHandler): void {
    this.context.off(getEventWithNamespace(this, event), handler);
  }

  protected setValueChecker(checker: ValueChecker): void {
    this.context.setFieldChecker(this.field.name, checker);
  }

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }

  protected beforeDestroy(): void {
    this.off();
  }
}
