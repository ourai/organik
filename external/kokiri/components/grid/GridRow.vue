<template>
  <div :class="getComponentClassNames()" :style="computedStyle">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle } from '../../external/petals/basic';
import { IGridRowComponent, GridRowHeadlessComponent } from '../../external/petals/grid';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('gridRow'),
})
export default class GridRow
  extends BaseStructuralComponent<GridRowHeadlessComponent>
  implements IGridRowComponent {
  @Prop({ type: Number, default: 0 })
  public readonly gutter!: number;

  private get computedStyle(): ComponentStyle {
    const gutter: number = this.getHeadlessComponent()!.getGutter();

    if (gutter === 0) {
      return {};
    }

    const gutterSize = `-${gutter / 2}px`;

    return { marginLeft: gutterSize, marginRight: gutterSize };
  }

  public created(): void {
    this.setHeadlessComponent(new GridRowHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
