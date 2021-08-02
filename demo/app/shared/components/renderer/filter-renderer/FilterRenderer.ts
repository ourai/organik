import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ComponentCtor, FilterDescriptor } from '../../../types';
import { capitalize } from '../../../utils';
import * as filterWidgets from '../../widget/filter';
import { getRenderType } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
})
export default class FilterRenderer extends Vue {
  @Prop({ type: Object, default: () => ({}) })
  private readonly filter!: FilterDescriptor;

  @Prop()
  private readonly value!: any;

  private render(h: CreateElement): VNode | null {
    let widgetCtor: ComponentCtor;

    if (this.filter.render) {
      widgetCtor = this.filter.render as ComponentCtor;
    } else {
      const dataType = this.filter.dataType || '';

      widgetCtor =
        filterWidgets[`${capitalize(getRenderType(dataType))}${capitalize(dataType)}Filter`];
    }

    return widgetCtor
      ? h(widgetCtor, {
          props: { filter: this.filter, value: this.value },
          on: { change: changed => this.$emit('change', this.filter.name, changed) },
        })
      : null;
  }
}
