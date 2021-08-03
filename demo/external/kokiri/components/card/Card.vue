<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { CardBodyStyle, ICardComponent, CardHeadlessComponent } from '../../external/petals/card';

import { isSpecificComponent } from '../../helper/utils';
import { getComponentName, BaseStructuralComponent } from '../basic';
import CardHeader from './CardHeader.vue';

@Component({
  name: getComponentName('card'),
})
export default class Card
  extends BaseStructuralComponent<CardHeadlessComponent>
  implements ICardComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: CardBodyStyle;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach((vn: any) => {
      if (isSpecificComponent(vn, getComponentName('cardHeader'))) {
        header = vn;
      } else if (isSpecificComponent(vn, getComponentName('cardFooter'))) {
        footer = vn;
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
      header = h(CardHeader, { props: { title: this.title } });
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h('div', { class: this.getComponentClassNames() }, children);
  }

  public created(): void {
    this.setHeadlessComponent(new CardHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
