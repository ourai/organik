<template>
  <footer :class="getComponentClassNames()" :style="computeStyle()">
    <slot />
  </footer>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle, LooseSize } from '../../external/petals/basic';
import {
  LayoutRole,
  ILayoutFooterComponent,
  LayoutFooterHeadlessComponent,
} from '../../external/petals/layout';

import { getComponentName } from '../basic';
import { LayoutControl } from './LayoutControl';

@Component({
  name: getComponentName('layoutFooter'),
})
export default class LayoutFooter
  extends LayoutControl<LayoutFooterHeadlessComponent>
  implements ILayoutFooterComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly height!: LooseSize;

  protected role: LayoutRole = 'footer';

  private computeStyle(): ComponentStyle {
    const height: string = this.getHeadlessComponent()!.getHeight();

    return height ? { height, marginBottom: `-${height}` } : {};
  }

  public created(): void {
    this.setHeadlessComponent(new LayoutFooterHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
