import { noop } from '@ntks/toolbox';
import { RequestParams, ResponseSuccess, ResponseFail } from 'organik';
import { Component, Watch } from 'vue-property-decorator';

import { ObjectValue, ListValue } from '../../../types/value';
import { DynamicRelationField } from '../../../types/input';
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

    if (!referenceValueGetter) {
      return;
    }

    referenceValueGetter(data).then(result => {
      if (result.success) {
        this.internalValue = result.data;
      }
    });
  }

  protected fetchRelatedList(
    params: RequestParams,
    success: ResponseSuccess = noop,
    fail: ResponseFail = noop,
  ): void {
    const { dynamic, relatedListGetter } = this.field as DynamicRelationField;

    if (!dynamic || !relatedListGetter) {
      return;
    }

    relatedListGetter(params).then(result => {
      if (result.success) {
        success(result.data, result.extra, result);
      } else {
        fail(result.message, result);
      }
    });
  }

  protected created(): void {
    if (this.field.dynamic) {
      this.on('dataChange', dataSource => this.fetchReferenceValue(dataSource));
    }
  }
}
