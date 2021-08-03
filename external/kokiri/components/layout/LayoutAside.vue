<template>
  <aside :class="getComponentClassNames()" :style="computeStyle()">
    <slot />
  </aside>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle, LooseSize } from '../../external/petals/basic';
import {
  LayoutRole,
  ILayoutAsideComponent,
  LayoutAsideHeadlessComponent,
} from '../../external/petals/layout';

import { getComponentName } from '../basic';
import { LayoutControl } from './LayoutControl';

@Component({
  name: getComponentName('layoutAside'),
})
export default class LayoutAside
  extends LayoutControl<LayoutAsideHeadlessComponent>
  implements ILayoutAsideComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly width!: LooseSize;

  protected role: LayoutRole = 'aside';

  private computeStyle(): ComponentStyle {
    const width: string = this.getHeadlessComponent()!.getWidth();

    return width ? { width, marginLeft: `-${width}` } : {};
  }

  public created(): void {
    this.setHeadlessComponent(new LayoutAsideHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
