<template>
  <demo-container title="弹性框 Flex">
    <demo-section title="演示">
      <demo-block title="正向横向排列水平对齐">
        <kokiri-flex class="FlexDemo-horizontalFlexContainer">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" justify="center">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" justify="end">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="正向横向排列垂直对齐">
        <kokiri-flex class="FlexDemo-horizontalFlexContainer">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" align="center">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" align="end">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="反向横向排列水平对齐">
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" justify="center" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" justify="end" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="反向横向排列垂直对齐">
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" align="center" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-horizontalFlexContainer" align="end" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="正向纵向排列垂直对齐">
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" justify="center">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" justify="end">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="正向纵向排列水平对齐">
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" align="center">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" align="end">
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="反向纵向排列垂直对齐">
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex
          class="FlexDemo-verticalFlexContainer"
          direction="vertical"
          justify="center"
          reverse
        >
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex
          class="FlexDemo-verticalFlexContainer"
          direction="vertical"
          justify="end"
          reverse
        >
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
      <demo-block title="反向纵向排列水平对齐">
        <kokiri-flex class="FlexDemo-verticalFlexContainer" direction="vertical" reverse>
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex
          class="FlexDemo-verticalFlexContainer"
          direction="vertical"
          align="center"
          reverse
        >
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
        <kokiri-flex
          class="FlexDemo-verticalFlexContainer"
          direction="vertical"
          align="end"
          reverse
        >
          <div class="FlexDemo-flexItem" :key="`n-${n}`" v-for="n in 3">{{ n }}</div>
        </kokiri-flex>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Flex as KokiriFlex } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    KokiriFlex,
  },
})
export default class FlexDemo extends Vue {}
</script>

<style lang="scss" scoped>
.FlexDemo {
  &-horizontalFlexContainer,
  &-verticalFlexContainer {
    background-color: #eee;
  }

  &-horizontalFlexContainer {
    height: 100px;
  }

  &-verticalFlexContainer {
    height: 200px;
  }

  &-horizontalFlexContainer + &-horizontalFlexContainer,
  &-verticalFlexContainer + &-verticalFlexContainer {
    margin-top: 8px;
  }

  &-flexItem {
    width: 150px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    background-color: #0092ff;

    &:nth-child(odd) {
      background-color: rgba(0, 146, 255, 0.75);
    }
  }
}
</style>
