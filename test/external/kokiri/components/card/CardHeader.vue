<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { ICardHeaderComponent, CardHeaderHeadlessComponent } from '@petals/card';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Toolbar } from '../toolbar';

@Component({
  name: getComponentName('cardHeader'),
})
export default class CardHeader
  extends BaseStructuralComponent<CardHeaderHeadlessComponent>
  implements ICardHeaderComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly image!: string;

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
      this.image
        ? [h('img', { class: this.getDescendantClassName('image'), attrs: { src: this.image } })]
        : this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new CardHeaderHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
