import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FieldWidget<ValueType = any> extends Vue {
  @Prop()
  protected readonly value!: ValueType;

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }
}
