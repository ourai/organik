<template>
  <box class="TabsDemo">
    <tabs :active="activeIndex" editable @change="handleTabChange">
      <tab-pane label="Tab 1">1</tab-pane>
      <tab-pane label="Tab 2">2</tab-pane>
      <tab-pane label="Tab 3">
        <flex align="center">
          <spacer />
          <buds-button primary @click="handleButtonClick">设为第一个</buds-button>
          <box style="background-color: orange;">3</box>
          <buds-button danger>Error</buds-button>
          <buds-button disabled>Disabled</buds-button>
        </flex>
      </tab-pane>
      <tab-pane label="Tab 4">4</tab-pane>
      <tab-pane label="Tab 5" disabled>5</tab-pane>
      <tab-pane label="Tab 6">6</tab-pane>
      <tab-pane label="Tab 7">7</tab-pane>
      <tab-pane label="Tab 8">8</tab-pane>
      <tab-pane label="Tab 9">9</tab-pane>
      <tab-pane label="Tab 10">10</tab-pane>
      <tab-pane label="Tab 11">11</tab-pane>
      <tab-pane label="Tab 12">12</tab-pane>
      <tab-pane label="Tab 13">13</tab-pane>
      <tab-pane label="Tab 14">14</tab-pane>
      <tab-pane label="Tab 15">15</tab-pane>
      <tab-pane label="Tab 16">16</tab-pane>
      <tab-pane label="Tab 17">17</tab-pane>
    </tabs>
  </box>
</template>

<style lang="scss" scoped>
.TabsDemo {
  padding: 50px;
  background-color: antiquewhite;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box } from '../../box';
import { Flex } from '../../flex';
import { Spacer } from '../../spacer';
import { Button as BudsButton } from '../../button';
import Tabs from '../Tabs.vue';
import TabPane from '../TabPane.vue';

@Component({
  components: {
    Box,
    Flex,
    Spacer,
    BudsButton,
    Tabs,
    TabPane,
  },
})
export default class TabsDemo extends Vue {
  private activeIndex: number = 1;

  private handleTabChange(idx: number): void {
    console.log(`切换到了第 ${idx + 1} 个选项卡`);
  }

  private handleButtonClick(): void {
    this.activeIndex = 0;
  }
}
</script>
