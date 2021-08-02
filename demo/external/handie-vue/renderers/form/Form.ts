import { ValidationResult, getControl } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ViewFieldDescriptor } from '../../types/input';
import FieldRenderer from '../field';

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

  @Prop({ type: Object, default: () => ({}) })
  private readonly validation!: Record<string, ValidationResult>;

  private render(h: CreateElement): VNode {
    const children: VNode[] = [];

    this.fields.forEach(field => {
      const { name, label } = field;
      const fieldValidation = this.validation[name] || { success: true };
      const readonly = this.readonly || field.readonly;

      children.push(
        h(
          getControl('FormItem'),
          {
            attrs: {
              label,
              required: readonly ? false : field.required,
              error: fieldValidation.success ? '' : fieldValidation.message,
            },
          },
          [
            h(FieldRenderer, {
              props: {
                field,
                value: this.value[name],
                readonly,
              },
              on: this.$listeners,
            }),
          ],
        ),
      );
    });

    return h(
      getControl('Form'),
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
