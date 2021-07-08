<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle } from '@petals/basic';
import { IListComponent, ListHeadlessComponent } from '@petals/list';

import { isSpecificComponent } from '../../helper/utils';
import { BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: 'BudsList',
})
export default class List extends BaseStructuralComponent<ListHeadlessComponent> implements IListComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly divided!: boolean;

  @Prop({ type: String, default: '' })
  public readonly bodyClassName!: string;

  @Prop({ type: Object, default: () => ({}) })
  public readonly bodyStyle!: ComponentStyle;

  public render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach(vn => {
      if (isSpecificComponent(vn, 'BudsListHeader')) {
        header = vn;
      } else if (isSpecificComponent(vn, 'BudsListFooter')) {
        footer = vn;
      } else if (isSpecificComponent(vn, 'BudsListItem')) {
        bodyNodes.push(vn);
      }
    });

    const bodyClassNames: string[] = [this.getDescendantClassName('body')];

    if (this.bodyClassName) {
      bodyClassNames.push(this.bodyClassName);
    }

    if (bodyNodes.length > 0) {
      children.push(h(Box, { class: bodyClassNames }, [h('ul', bodyNodes)]));
    } else {
      children.push(h(Box, { class: bodyClassNames }));
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h(Box, { class: this.getComponentClassNames() }, children);
  }

  public created(): void {
    this.setHeadlessComponent(new ListHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
