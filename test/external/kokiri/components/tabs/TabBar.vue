<template>
  <div :class="getComponentClassNames()">
    <div :class="getDescendantClassName('content')">
      <div :class="getDescendantClassName('navs')">
        <tab-nav
          v-for="(item, index) in navs"
          :key="item.label"
          :class="getDescendantClassName('nav')"
          :flag="index"
          :active="index === activeIndex"
          :disabled="item.disabled"
          @change="handleTabNavChange"
          >{{ item.label }}</tab-nav
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';

import { TabNavFlag, TabNavType, ITabBarComponent, TabBarHeadlessComponent } from '@petals/tabs';

import { getComponentName, BaseStructuralComponent } from '../basic';
import TabNav from './TabNav.vue';

@Component({
  name: getComponentName('tabBar'),
  components: {
    TabNav,
  },
})
export default class TabBar
  extends BaseStructuralComponent<TabBarHeadlessComponent>
  implements ITabBarComponent {
  @Prop({ type: Array, default: () => [] })
  public readonly navs!: TabNavType[];

  @Prop({ type: [Number, String], default: 0 })
  public readonly activeFlag!: TabNavFlag;

  /**
   * 选项卡是否拉伸
   */
  @Prop({ type: Boolean, default: false })
  public readonly stretch!: boolean;

  private activeIndex: number = 0;

  @Watch('activeFlag', { immediate: true })
  private handleActiveFlagChange(flag: TabNavFlag) {
    const activeIndex: number = Number(flag);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  @Emit('change')
  private handleTabNavChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TabBarHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
