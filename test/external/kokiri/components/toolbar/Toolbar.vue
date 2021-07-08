<script lang="ts">
import { CreateElement, VNode, VNodeChildren } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { IToolbarComponent, ToolbarHeadlessComponent } from '@petals/toolbar';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Flex } from '../flex';

type NodeType = string | VNode;

@Component({
  name: getComponentName('toolbar'),
})
export default class Toolbar
  extends BaseStructuralComponent<ToolbarHeadlessComponent<NodeType>>
  implements IToolbarComponent<NodeType> {
  @Prop({ type: [String, Object], default: '' })
  public readonly content!: NodeType;

  @Prop({ type: String, default: '' })
  public readonly contentClassName!: string;

  @Prop({ type: String, default: '' })
  public readonly extraClassName!: string;

  public render(h: CreateElement): VNode {
    const newNodes: VNode[] = [];

    if (this.content) {
      newNodes.push(
        h(
          'div',
          {
            class: [this.getDescendantClassName('content'), this.contentClassName],
          },
          [this.content],
        ),
      );
    }

    const children: VNodeChildren = this.$slots.default;

    if (children) {
      newNodes.push(
        h(
          'div',
          {
            class: [this.getDescendantClassName('extra'), this.extraClassName],
          },
          children,
        ),
      );
    }

    return h(
      Flex,
      {
        class: this.getComponentClassNames(),
        props: {
          tag: this.tag,
          align: 'center',
        },
      },
      newNodes,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new ToolbarHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
