<template>
  <div :class="getComponentClassNames()" @click.stop="handleClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { TabNavFlag, ITabNavComponent, TabNavHeadlessComponent } from '../../external/petals/tabs';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('tabNav'),
})
export default class TabNav
  extends BaseStructuralComponent<TabNavHeadlessComponent>
  implements ITabNavComponent {
  @Prop({ type: [Number, String], default: 0 })
  public readonly flag!: TabNavFlag;

  @Prop({ type: Boolean, default: false })
  public readonly active!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  private handleClick(): void {
    if (this.active || this.disabled) {
      return;
    }

    this.$emit('change', this.flag);
  }

  public created(): void {
    this.setHeadlessComponent(new TabNavHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
