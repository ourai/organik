import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { EnumFilterWidget } from '../../../base';

@Component
export default class SelectEditEnumField extends EnumFilterWidget {
  private render(h: CreateElement): VNode {
    const children: VNode[] = this.options.map(opt =>
      h(getControl('Option'), { props: { label: opt.label, value: opt.value } }),
    );

    children.unshift(h(getControl('Option'), { props: { label: '全部', value: '' } }));

    return h(
      getControl('Select'),
      { props: { value: this.internalValue }, on: { change: this.onChange } },
      children,
    );
  }
}
