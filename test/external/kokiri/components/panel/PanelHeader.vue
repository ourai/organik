<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { IPanelHeaderComponent, PanelHeaderHeadlessComponent } from '@petals/panel';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Toolbar } from '../toolbar';

@Component({
  name: getComponentName('panelHeader'),
})
export default class PanelHeader
  extends BaseStructuralComponent<PanelHeaderHeadlessComponent>
  implements IPanelHeaderComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  public render(h: CreateElement): VNode {
    return h(
      Toolbar,
      {
        class: this.getComponentClassNames(),
        props: {
          tag: this.tag,
          content: this.title,
          contentClassName: this.getDescendantClassName('title'),
          extraClassName: this.getDescendantClassName('extra'),
        },
      },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new PanelHeaderHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
