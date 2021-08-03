import { capitalize } from '@ntks/toolbox';
import { getWidget } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ComponentCtor } from '../../types/component';
import { ViewFieldDescriptor } from '../../types/input';
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
    let widgetCtor: ComponentCtor | undefined;

    if (this.field.render) {
      widgetCtor = this.field.render as ComponentCtor;
    } else {
      const dataType = this.field.dataType || '';

      widgetCtor = getWidget(
        `${capitalize(getRenderType(dataType))}${this.readonly ? 'Read' : 'Edit'}${capitalize(
          dataType,
        )}Field`,
      ) as ComponentCtor | undefined;
    }

    return widgetCtor
      ? h(widgetCtor, {
          props: { field: this.field, value: this.value },
          on: { change: changed => this.$emit('change', this.field.name, changed) },
        })
      : null;
  }
}
