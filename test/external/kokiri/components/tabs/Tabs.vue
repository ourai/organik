<template>
  <div :class="getComponentClassNames()">
    <tab-bar
      :class="getDescendantClassName('tabBar')"
      :navs="tabNavs"
      :active-flag="activeIndex"
      :stretch="tabBarStretch"
      @change="handleTabNavChange"
      v-if="panes.length > 0"
    />
    <view-stack
      :class="getDescendantClassName('panes')"
      :view-class-name="getDescendantClassName('pane')"
      :active-flag="activeIndex"
    >
      <slot />
    </view-stack>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';

import {
  TabNavFlag,
  TabNavType,
  TabBarPosition,
  ITabsComponent,
  TabsHeadlessComponent,
} from '@petals/tabs';

import { isSpecificComponent } from '../../helper/utils';
import { getComponentName, BaseStructuralComponent } from '../basic';
import { ViewStack } from '../view-stack';
import TabBar from './TabBar.vue';

@Component({
  name: getComponentName('tabs'),
  components: {
    ViewStack,
    TabBar,
  },
})
export default class Tabs
  extends BaseStructuralComponent<TabsHeadlessComponent>
  implements ITabsComponent {
  /**
   * 默认激活的选项卡索引
   */
  @Prop({ type: [String, Number], default: 0 })
  public readonly activeFlag!: TabNavFlag;

  /**
   * 选项卡显示位置
   */
  @Prop({ type: String, default: 'top' })
  public readonly tabBarPosition!: TabBarPosition;

  /**
   * 选项卡标签是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  public readonly tabBarStretch!: boolean;

  /**
   * 选项卡内容是否高度固定
   */
  @Prop({ type: Boolean, default: false })
  public readonly fixed!: boolean;

  private activeIndex: number = 0;

  private panes: any[] = [];

  private get tabNavs(): TabNavType[] {
    return this.panes.map(({ label, title, disabled = false }) => ({
      label: label || title,
      disabled,
    }));
  }

  @Watch('activeFlag', { immediate: true })
  private handleActiveChange(flag: TabNavFlag): void {
    const activeIndex: number = Number(flag);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  private getPaneSlots(): any[] {
    return this.$slots.default
      ? this.$slots.default.filter(vn => isSpecificComponent(vn, getComponentName('tabPane')))
      : [];
  }

  private calcPanes(isForceUpdate = false): void {
    if (this.$slots.default) {
      const panes = this.getPaneSlots().map(({ componentInstance }) => componentInstance);
      const panesChanged = !(
        panes.length === this.panes.length &&
        panes.every((pane, index) => pane === this.panes[index])
      );

      if (isForceUpdate || panesChanged) {
        this.panes = panes;
      }
    } else if (this.panes.length !== 0) {
      this.panes = [];
    }
  }

  private handleTabNavChange(...args): void {
    this.activeIndex = args[0];

    this.$forceUpdate();
    this.$nextTick(() => this.$emit('change', ...args));
  }

  public created(): void {
    this.setHeadlessComponent(new TabsHeadlessComponent(this));
    this.$on('tab-pane-update', this.calcPanes.bind(null, true));
  }

  public mounted(): void {
    this.calcPanes();
  }

  public updated(): void {
    this.calcPanes();
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
