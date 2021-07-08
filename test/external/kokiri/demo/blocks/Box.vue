<template>
  <demo-container title="盒子 Box">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <box>这是一个盒子</box>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Box } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    Box,
  },
})
export default class BoxDemo extends Vue {}
</script>
