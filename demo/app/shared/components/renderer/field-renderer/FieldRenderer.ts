import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../../types';
import { capitalize } from '../../../utils';
import * as fieldWidgets from '../../widget/field';
import { getRenderType } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
})
export default class FieldRenderer extends Vue {
  @Prop({ type: Object, default: () => ({}) })
  private readonly field!: ViewFieldDescriptor;

  @Prop()
  private readonly value!: any;

  @Prop({ type: Boolean, default: false })
  private readonly readonly!: boolean;

  private render(h: CreateElement): VNode | null {
    const dataType = this.field.dataType || '';
    const widgetCtor =
      fieldWidgets[
        `${capitalize(getRenderType(dataType))}${
          this.readonly || this.field.readonly ? 'Read' : 'Edit'
        }${capitalize(dataType)}Field`
      ];

    return widgetCtor
      ? h(widgetCtor, {
          props: { value: this.value },
          on: { change: changed => this.$emit('change', this.field.name, changed) },
        })
      : null;
  }
}
