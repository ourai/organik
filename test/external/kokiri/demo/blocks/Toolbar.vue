<template>
  <demo-container title="工具栏 Toolbar">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <div class="ToolbarDemo-darkBgLayer">
          <kokiri-toolbar class="ToolbarDemo-toolbar" content="工具栏" />
          <kokiri-toolbar class="ToolbarDemo-toolbar" content="工具栏">
            <kokiri-button class="ToolbarDemo-button" size="small" color="primary"
              >按钮</kokiri-button
            >
            <kokiri-button class="ToolbarDemo-button" size="small" color="danger"
              >按钮</kokiri-button
            >
          </kokiri-toolbar>
        </div>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Toolbar as KokiriToolbar, Button as KokiriButton } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    KokiriToolbar,
    KokiriButton,
  },
})
export default class ToolbarDemo extends Vue {}
</script>

<style lang="scss" scoped>
.ToolbarDemo {
  &-darkBgLayer {
    padding: 8px;
    background-color: #bec8c8;
  }

  &-toolbar {
    height: 50px;
    padding: 0 8px;
    border: 1px solid #a6a6a6;
    background-color: #fff;
  }

  &-toolbar + &-toolbar {
    margin-top: 8px;
  }

  &-button + &-button {
    margin-left: 8px;
  }
}
</style>
