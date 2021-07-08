<template>
  <flex :class="getComponentClassNames()" :style="computeStyle()" align="center" tag="header">
    <slot />
  </flex>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle, LooseSize } from '@petals/basic';
import { LayoutRole, ILayoutHeaderComponent, LayoutHeaderHeadlessComponent } from '@petals/layout';

import { getComponentName } from '../basic';
import { Flex } from '../flex';
import { LayoutControl } from './LayoutControl';

@Component({
  name: getComponentName('layoutHeader'),
  components: {
    Flex,
  },
})
export default class LayoutHeader
  extends LayoutControl<LayoutHeaderHeadlessComponent>
  implements ILayoutHeaderComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly height!: LooseSize;

  protected role: LayoutRole = 'header';

  private computeStyle(): ComponentStyle {
    const height: string = this.getHeadlessComponent()!.getHeight();

    return height ? { height, marginTop: `-${height}` } : {};
  }

  public created(): void {
    this.setHeadlessComponent(new LayoutHeaderHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
