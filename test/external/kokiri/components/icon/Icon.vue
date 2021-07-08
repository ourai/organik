<template>
  <span :class="computedClassNames">
    <svg
      :class="computedDescendantClassName"
      focusable="false"
      aria-hidden="true"
      v-if="iconType === 'svg'"
    >
      <use :xlink:href="`#${iconRef}`" />
    </svg>
    <i :class="computedDescendantClassName" aria-hidden="true" v-else />
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  IconType,
  IIconComponent,
  registerAndLoadIconProviders,
  IconHeadlessComponent,
} from '@petals/icon';

import { getComponentName, BaseStructuralComponent } from '../basic';

registerAndLoadIconProviders({
  ol: {
    type: 'svg',
    urls: ['//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js'],
    resolve: (ref: string) => `icon-${ref}`,
  },
});

@Component({
  name: getComponentName('icon'),
})
export default class Icon
  extends BaseStructuralComponent<IconHeadlessComponent>
  implements IIconComponent {
  @Prop({ type: String, default: '' })
  public readonly refs!: string;

  private iconType: IconType = 'font';

  private iconRef: string = '';

  private get computedClassNames(): string[] {
    return [...this.getComponentClassNames(), ...this.getExtraClassNames()];
  }

  private get computedDescendantClassName(): string {
    return this.getDescendantClassName('content');
  }

  private initMetadata(): void {
    const hc = this.getHeadlessComponent()!;
    const { type } = hc.getOption();

    this.iconType = type;
    this.iconRef = hc.getSvgIconRef();
  }

  public created(): void {
    this.setHeadlessComponent(new IconHeadlessComponent(this));
    this.initMetadata();
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
