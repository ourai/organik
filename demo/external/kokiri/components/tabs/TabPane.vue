<template>
  <div :class="getComponentClassNames()">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ITabPaneComponent, TabPaneHeadlessComponent } from '../../external/petals/tabs';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('tabPane'),
})
export default class TabPane
  extends BaseStructuralComponent<TabPaneHeadlessComponent>
  implements ITabPaneComponent {
  /**
   * 选项卡文本
   */
  @Prop({ type: String, required: true })
  public readonly label!: string;

  public created(): void {
    this.setHeadlessComponent(new TabPaneHeadlessComponent(this));
  }

  public updated(): void {
    this.$parent.$emit('tab-pane-update');
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
