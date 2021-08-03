import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { FieldWidget } from '../../../base';

@Component
export default class TextareaEditTextField extends FieldWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';

  private render(h: CreateElement): VNode {
    return h(getControl('Input'), {
      props: { type: 'textarea', value: this.value },
      on: { input: this.onChange },
    });
  }
}
