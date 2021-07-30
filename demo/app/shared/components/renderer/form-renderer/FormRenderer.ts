import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../../types';
import Form, { FormItem } from '../../control/form';
import FieldRenderer from '../field-renderer';

@Component({
  // @ts-ignore
  abstract: true,
})
export default class FormRenderer extends Vue {
  @Prop({ type: Array, default: () => [] })
  private readonly fields!: ViewFieldDescriptor[];

  @Prop({ type: Object, default: () => ({}) })
  private readonly value!: Record<string, any>;

  @Prop({ type: Boolean, default: false })
  private readonly readonly!: boolean;

  private render(h: CreateElement): VNode {
    const children: VNode[] = [];

    this.fields.forEach(field => {
      const { name, label } = field;

      children.push(
        h(FormItem, { attrs: { label, prop: name } }, [
          h(FieldRenderer, {
            props: {
              field,
              value: this.value[name],
              readonly: this.readonly,
            },
            on: this.$listeners,
          }),
        ]),
      );
    });

    return h(
      Form,
      {
        attrs: {
          labelWidth: '100px',
          labelPosition: 'right',
        },
      },
      children,
    );
  }
}
