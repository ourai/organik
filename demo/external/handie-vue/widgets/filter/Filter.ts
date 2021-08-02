import { FilterDescriptor } from 'organik';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FilterWidget<ValueType = any> extends Vue {
  @Prop({ type: Object, default: () => ({}) })
  protected readonly filter!: FilterDescriptor;

  @Prop()
  protected readonly value!: ValueType;

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }
}
