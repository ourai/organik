import { capitalize } from '@ntks/toolbox';
import { getWidget } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ComponentCtor } from '../../types/component';
import { FilterDescriptor } from '../../types/input';
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
    let widgetCtor: ComponentCtor | undefined;

    if (this.filter.render) {
      widgetCtor = this.filter.render as ComponentCtor;
    } else {
      const dataType = this.filter.dataType || '';

      widgetCtor = getWidget(
        `${capitalize(getRenderType(dataType))}${capitalize(dataType)}Filter`,
      ) as ComponentCtor | undefined;
    }

    return widgetCtor
      ? h(widgetCtor, {
          props: { filter: this.filter, value: this.value },
          on: { change: changed => this.$emit('change', this.filter.name, changed) },
        })
      : null;
  }
}
