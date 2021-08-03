<template>
  <p :class="getComponentClassNames()" v-on="$listeners">
    <slot />
  </p>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  TypoLinePosition,
  TypoTextColor,
  IParagraphComponent,
  ParagraphHeadlessComponent,
} from '../../external/petals/paragraph';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('paragraph'),
})
export default class Paragraph
  extends BaseStructuralComponent<ParagraphHeadlessComponent>
  implements IParagraphComponent {
  @Prop({ type: String, default: 'none' })
  public readonly line!: TypoLinePosition;

  @Prop({ type: String, default: '' })
  public readonly color!: TypoTextColor;

  @Prop({ type: Boolean, default: false })
  public readonly bold!: boolean;

  public created(): void {
    this.setHeadlessComponent(new ParagraphHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
