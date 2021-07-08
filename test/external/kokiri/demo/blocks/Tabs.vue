<template>
  <demo-container title="选项卡 Tabs">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <tabs
          class="TabsDemo-tabs"
          active-flag="1"
          :tab-bar-position="pos"
          :key="`tab-bar-${pos}`"
          v-for="pos in tabBarPositions"
        >
          <tab-pane :label="`Tab ${n}`" :key="`tabs-pane-${pos}-${n}`" v-for="n in 3"
            >Content of Tab Pane {{ n }} ({{ pos }})</tab-pane
          >
        </tabs>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Tabs, TabPane } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    Tabs,
    TabPane,
  },
})
export default class TabsDemo extends Vue {
  private tabBarPositions: string[] = ['top', 'right', 'bottom', 'left'];
}
</script>

<style lang="scss" scoped>
.TabsDemo {
  &-tabs + &-tabs {
    margin-top: 24px;
  }
}
</style>
