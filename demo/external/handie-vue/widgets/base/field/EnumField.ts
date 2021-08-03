import { Component, Prop, Watch } from 'vue-property-decorator';

import { EnumFieldOption, EnumField } from '../../types/input';
import FieldWidget from './Field';

@Component
export default class EnumFieldWidget extends FieldWidget<number | string> {
  @Prop({ type: [Number, String], default: '' })
  protected readonly value: number | string = '';

  protected internalValue: number | string = '';

  protected get options(): EnumFieldOption[] {
    return (this.field as EnumField).options;
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
