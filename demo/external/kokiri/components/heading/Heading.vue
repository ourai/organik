<template>
  <component :is="computedHeading" :class="getComponentClassNames()">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  TypoLinePosition,
  TypoTextColor,
  HeadingLevel,
  IHeadingComponent,
  HeadingHeadlessComponent,
} from '../../external/petals/heading';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('heading'),
})
export default class Heading
  extends BaseStructuralComponent<HeadingHeadlessComponent>
  implements IHeadingComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: 'default' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  @Prop({ type: Number, default: 1 })
  public readonly level!: HeadingLevel;

  private get computedHeading(): string {
    return `h${this.level}`;
  }

  public created(): void {
    this.setHeadlessComponent(new HeadingHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
