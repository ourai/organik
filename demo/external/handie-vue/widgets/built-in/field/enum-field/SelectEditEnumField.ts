import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { EnumFieldWidget } from '../../../base';

@Component
export default class SelectEditEnumField extends EnumFieldWidget {
  private render(h: CreateElement): VNode {
    return h(
      getControl('Select'),
      {
        props: { value: this.internalValue, clearable: this.field.required },
        on: { change: this.onChange },
      },
      this.options.map(opt =>
        h(getControl('Option'), { props: { label: opt.label, value: opt.value } }),
      ),
    );
  }
}
