<template>
  <a :class="getComponentClassNames()" :href="href" :target="`_${target}`">
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { LinkTarget, ILinkComponent, LinkHeadlessComponent } from '../../external/petals/link';

import { getComponentName, BaseStructuralComponent } from '../basic';

type LinkHref = string;

@Component({
  name: getComponentName('link'),
})
export default class Link
  extends BaseStructuralComponent<LinkHeadlessComponent>
  implements ILinkComponent<LinkHref> {
  @Prop({ type: String, default: 'javascript:void(0);' })
  public readonly href!: LinkHref;

  @Prop({ type: String, default: 'self' })
  public readonly target!: LinkTarget;

  public created(): void {
    this.setHeadlessComponent(new LinkHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
