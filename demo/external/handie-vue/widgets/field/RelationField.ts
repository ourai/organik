import { Component, Watch } from 'vue-property-decorator';

import { ObjectValue, ListValue } from '../../types/value';
import { DynamicRelationField } from '../../types/field';
import FieldWidget from './Field';

@Component
export default class RelationFieldWidget<
  ValueType = ObjectValue | ListValue
> extends FieldWidget<ValueType> {
  protected internalValue: ValueType = null as any;

  @Watch('value', { immediate: true })
  private handleValueChange(): void {
    if (!this.field.dynamic) {
      this.internalValue = this.value;
    }
  }

  private fetchReferenceValue(data: ValueType): void {
    const { referenceValueGetter } = this.field as DynamicRelationField;

    referenceValueGetter(data).then(result => {
      if (result.success) {
        this.internalValue = result.data;
      }
    });
  }

  protected created(): void {
    if (this.field.dynamic) {
      this.on('dataChange', dataSource => this.fetchReferenceValue(dataSource));
    }
  }
}
