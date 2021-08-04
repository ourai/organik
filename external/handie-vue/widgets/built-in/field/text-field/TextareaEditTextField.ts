import { getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { StringField } from '../../../../types/input';
import { FieldWidget } from '../../../base';
import defaultBehaviors from './behavior';

@Component
export default class TextareaEditTextField extends FieldWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';

  protected created(): void {
    this.setBehaviors('field.text', defaultBehaviors);
  }

  private render(h: CreateElement): VNode {
    let showWordLimit = this.config.showWordLimit;

    if (showWordLimit === undefined) {
      showWordLimit = this.getBehavior('showWordLimit');
    }

    return h(getControl('Input'), {
      props: {
        type: 'textarea',
        value: this.value,
        resize: 'none',
        showWordLimit,
      },
      attrs: {
        placeholder: this.getPlaceholder(),
        rows: this.config.rows || this.getBehavior('rows'),
        maxlength: (this.field as StringField).max,
      },
      on: { input: this.onChange },
    });
  }
}
