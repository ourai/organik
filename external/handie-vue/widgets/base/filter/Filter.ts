import { FilterDescriptor } from 'organik';
import { Component, Prop } from 'vue-property-decorator';

import BaseWidget from '../BaseWidget';

@Component
export default class FilterWidget<ValueType = any> extends BaseWidget {
  @Prop({ type: Object, default: () => ({}) })
  protected readonly filter!: FilterDescriptor;

  @Prop()
  protected readonly value!: ValueType;

  protected getPlaceholder(): string {
    return this.getCommonBehavior('filter.showHintAsPlaceholder')
      ? (this.filter.config || {}).hint || ''
      : '';
  }

  protected onChange(value: ValueType): void {
    this.$emit('change', value);
  }
}