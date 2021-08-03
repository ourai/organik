import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { FilterWidget } from '../../../base';

@Component
export default class InputStringFilter extends FilterWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';

  private render(h: CreateElement): VNode {
    return h(getControl('Input'), {
      props: { value: this.value },
      attrs: { placeholder: this.getPlaceholder() },
      on: { input: this.onChange },
    });
  }
}
