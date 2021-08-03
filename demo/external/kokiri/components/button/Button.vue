<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';

import {
  ButtonBorder,
  ButtonSize,
  IButtonComponent,
  ButtonHeadlessComponent,
} from '../../external/petals/button';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('button'),
})
export default class Button
  extends BaseStructuralComponent<ButtonHeadlessComponent>
  implements IButtonComponent {
  @Prop({ type: String, default: 'medium' })
  public readonly size!: ButtonSize;

  @Prop({ type: String, default: 'solid' })
  public readonly border!: ButtonBorder;

  @Prop({ type: Boolean, default: false })
  public readonly outlined!: boolean;

  @Prop({ type: String, default: '' })
  public readonly color!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Emit('click')
  private handleClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public render(h: CreateElement): VNode {
    const attrs: { [key: string]: any } = {};

    if (this.disabled) {
      attrs.disabled = 'disabled';
    }

    return h(
      'button',
      {
        class: this.getComponentClassNames(),
        attrs,
        on: {
          click: this.handleClick,
        },
      },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new ButtonHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
