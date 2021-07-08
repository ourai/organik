<template>
  <el-submenu :index="flag" :disabled="disabled" :popper-class="popupClassName">
    <slot />
    <slot name="title" slot="title" />
  </el-submenu>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Submenu as ElSubmenu } from 'element-ui';

import { INavSubMenuComponent, NavSubMenuHeadlessComponent } from '@petals/nav-menu';

import { BaseStructuralComponent } from '../basic';

@Component({
  // FIXME:
  // 为了解决 ElSubmenu 无限触发事件暂时这么写
  // 抛弃 Element 的菜单组件后可以去掉
  // @ts-ignore
  abstract: true,
  name: 'BudsSubMenu',
  components: {
    ElSubmenu,
  },
})
export default class SubMenu
  extends BaseStructuralComponent<NavSubMenuHeadlessComponent>
  implements INavSubMenuComponent
{
  @Prop({ type: String, default: '' })
  public readonly flag!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  public readonly popupClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new NavSubMenuHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
