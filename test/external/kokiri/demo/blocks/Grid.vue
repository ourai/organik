<template>
  <demo-container title="栅格 Grid">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col">col</grid-col>
        </grid-row>
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :span="12" :key="`col-12-${n}`" v-for="n in 2"
            >col-12</grid-col
          >
        </grid-row>
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :span="8" :key="`col-8-${n}`" v-for="n in 3"
            >col-8</grid-col
          >
        </grid-row>
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :span="6" :key="`col-6-${n}`" v-for="n in 4"
            >col-6</grid-col
          >
        </grid-row>
      </demo-block>
      <demo-block title="区块间隔">
        <grid-row class="GridDemo-row" :gutter="m * 8" :key="`row-gutter-${m}`" v-for="m in 4">
          <grid-col :span="6" :key="`col-6-${n}`" v-for="n in 4">
            <div class="GridDemo-cell">col-6</div>
          </grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="左右偏移">
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :span="8">col-8</grid-col>
          <grid-col class="GridDemo-col" :span="8" :offset="8">col-8 col-offset-8</grid-col>
        </grid-row>
        <grid-row class="GridDemo-row">
          <grid-col
            class="GridDemo-col"
            :span="6"
            :offset="6"
            :key="`col-offset-${n}`"
            v-for="n in 2"
            >col-6 col-offset-6</grid-col
          >
        </grid-row>
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :span="12" :offset="6">col-12 col-offset-6</grid-col>
        </grid-row>
      </demo-block>
      <demo-block title="响应式布局">
        <grid-row class="GridDemo-row">
          <grid-col class="GridDemo-col" :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col</grid-col>
          <grid-col class="GridDemo-col" :xs="20" :sm="16" :md="12" :lg="8" :xl="4">col</grid-col>
          <grid-col class="GridDemo-col" :xs="2" :sm="4" :md="6" :lg="8" :xl="10">col</grid-col>
        </grid-row>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { GridRow, GridCol } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    GridRow,
    GridCol,
  },
})
export default class GridDemo extends Vue {}
</script>

<style lang="scss" scoped>
.GridDemo {
  &-row + &-row {
    margin-top: 8px;
  }

  &-col,
  &-cell {
    line-height: 50px;
    color: #fff;
    text-align: center;
    background-color: #0092ff;
  }

  &-col:nth-child(odd) {
    background-color: rgba(0, 146, 255, 0.75);
  }
}
</style>
