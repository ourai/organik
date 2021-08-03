import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { EnumFieldWidget } from '../../../base';

@Component
export default class RadioGroupEditEnumField extends EnumFieldWidget {
  private render(h: CreateElement): VNode {
    return h(
      getControl('RadioGroup'),
      { props: { value: this.internalValue }, on: { change: this.onChange } },
      this.options.map(opt =>
        h(getControl('Radio'), { props: { label: opt.value, value: opt.value } }, opt.label),
      ),
    );
  }
}
