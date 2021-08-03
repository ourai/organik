<template>
  <box :class="$style.TileCell" :style="computedStyle">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ITileCellComponent } from '../../external/petals/tile';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: getComponentName('tileCell'),
  components: {
    Box,
  },
})
export default class TileCell extends BaseStructuralComponent implements ITileCellComponent {
  @Prop({ type: Number, required: true })
  public readonly width!: number;

  @Prop({ type: Number, required: true })
  public readonly height!: number;

  private get computedStyle(): any {
    const { width, height } = this;

    if (width > 0 && height > 0) {
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    }

    return {};
  }

  public updated(): void {
    this.$parent.$emit('tile-cell-update');
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
