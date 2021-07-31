import { ValueChecker, ObjectViewContext } from 'organik';
import Vue from 'vue';
import { Component, Prop, Inject } from 'vue-property-decorator';

@Component
export default class FieldWidget<ValueType = any> extends Vue {
  @Inject({ from: 'viewContext', default: null })
  private readonly context!: ObjectViewContext;

  @Prop({ type: String, default: '' })
  protected readonly name!: string;

  @Prop()
  protected readonly value!: ValueType;

  protected setValueChecker(checker: ValueChecker): void {
    this.context.setFieldChecker(this.name, checker);
  }

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }
}
