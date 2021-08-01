import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ComponentCtor, ViewFieldDescriptor } from '../../../types';
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
    let widgetCtor: ComponentCtor;

    if (this.field.render) {
      widgetCtor = this.field.render as ComponentCtor;
    } else {
      const dataType = this.field.dataType || '';

      widgetCtor =
        fieldWidgets[
          `${capitalize(getRenderType(dataType))}${this.readonly ? 'Read' : 'Edit'}${capitalize(
            dataType,
          )}Field`
        ];
    }

    return widgetCtor
      ? h(widgetCtor, {
          props: { field: this.field, value: this.value },
          on: { change: changed => this.$emit('change', this.field.name, changed) },
        })
      : null;
  }
}
