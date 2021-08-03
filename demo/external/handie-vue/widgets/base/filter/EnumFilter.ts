import { Component, Prop, Watch } from 'vue-property-decorator';

import { EnumFieldOption, EnumField } from '../../../types/input';
import FilterWidget from './Filter';

@Component
export default class EnumFilterWidget extends FilterWidget<number | string> {
  @Prop({ type: [Number, String], default: '' })
  protected readonly value: number | string = '';

  protected internalValue: number | string = '';

  protected get options(): EnumFieldOption[] {
    return (this.filter as EnumField).options;
  }

  protected get displayText(): string {
    const chosen = this.options.find(opt => opt.value === this.value);

    return chosen ? chosen.label : '';
  }

  @Watch('value', { immediate: true })
  private handleValueChange(): void {
    this.internalValue = this.value;
  }
}
