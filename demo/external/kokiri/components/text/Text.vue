<template>
  <span :class="getComponentClassNames()" v-on="$listeners">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  TypoLinePosition,
  TypoTextColor,
  ITextComponent,
  TextHeadlessComponent,
} from '../../external/petals/text';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('text'),
})
export default class Text
  extends BaseStructuralComponent<TextHeadlessComponent>
  implements ITextComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: '' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  public created(): void {
    this.setHeadlessComponent(new TextHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
