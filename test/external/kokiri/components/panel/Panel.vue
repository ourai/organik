<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { PanelBodyStyle, IPanelComponent, PanelHeadlessComponent } from '@petals/panel';

import { isSpecificComponent } from '../../helper/utils';
import { getComponentName, BaseStructuralComponent } from '../basic';
import PanelHeader from './PanelHeader.vue';

@Component({
  name: getComponentName('panel'),
})
export default class Panel
  extends BaseStructuralComponent<PanelHeadlessComponent>
  implements IPanelComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly fixed!: boolean;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: PanelBodyStyle;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach((vn: any) => {
      if (isSpecificComponent(vn, getComponentName('panelHeader'))) {
        header = vn;
      } else {
        bodyNodes.push(vn);
      }
    });

    children.push(
      h(
        'div',
        {
          class: [this.getDescendantClassName('body'), this.bodyClassName],
          style: this.bodyStyle,
        },
        bodyNodes,
      ),
    );

    if (!header && this.title) {
      header = h(PanelHeader, { props: { title: this.title } });
    }

    if (header) {
      children.unshift(header);
    }

    return h('div', { class: this.getComponentClassNames() }, children);
  }

  public created(): void {
    this.setHeadlessComponent(new PanelHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
