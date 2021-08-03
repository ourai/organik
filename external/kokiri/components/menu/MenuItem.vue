<template>
  <el-menu-item :index="flag" :disabled="disabled" @click="handleClick">
    <slot />
    <slot name="title" slot="title" />
  </el-menu-item>
</template>

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';
import { MenuItem as ElMenuItem } from 'element-ui';

import {
  INavMenuItemComponent,
  NavMenuItemHeadlessComponent,
} from '../../external/petals/nav-menu';

import { BaseStructuralComponent } from '../basic';

type LinkHref = string;

@Component({
  name: 'BudsMenuItem',
  components: {
    ElMenuItem,
  },
})
export default class MenuItem
  extends BaseStructuralComponent<NavMenuItemHeadlessComponent>
  implements INavMenuItemComponent<LinkHref> {
  @Prop({ type: String, default: '' })
  public readonly flag!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  public readonly href!: LinkHref;

  @Emit('click')
  private handleClick(): void {}

  public created(): void {
    this.setHeadlessComponent(new NavMenuItemHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
