<template>
  <div class="TestWidget">来自动画模块的部件 <ol-button>基础组件里的按钮</ol-button></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import context from '../../context';

@Component({
  components: context.getComponents(),
})
export default class TestWidget extends Vue {}
</script>

<style lang="scss" src="./style.scss" scoped></style>
