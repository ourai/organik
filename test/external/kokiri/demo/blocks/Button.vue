<template>
  <demo-container title="按钮 Button">
    <demo-section title="演示">
      <demo-block title="边框">
        <kokiri-button class="ButtonDemo-button">实线边框</kokiri-button>
        <kokiri-button class="ButtonDemo-button" border="dashed">虚线边框</kokiri-button>
        <kokiri-button class="ButtonDemo-button" border="none">无边框</kokiri-button>
      </demo-block>
      <demo-block title="颜色">
        <kokiri-button class="ButtonDemo-button">Default</kokiri-button>
        <kokiri-button class="ButtonDemo-button" color="primary">Primary</kokiri-button>
        <kokiri-button class="ButtonDemo-button" color="danger">Danger</kokiri-button>
      </demo-block>
      <demo-block title="线框按钮">
        <div class="ButtonDemo-darkBgLayer">
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" outlined>实线边框</kokiri-button>
            <kokiri-button class="ButtonDemo-button" border="dashed" outlined
              >虚线边框</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" border="none" outlined>无边框</kokiri-button>
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" color="primary" outlined
              >Primary</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" color="danger" outlined>Danger</kokiri-button>
          </div>
        </div>
      </demo-block>
      <demo-block title="尺寸">
        <div class="ButtonDemo-group">
          <kokiri-button class="ButtonDemo-button" size="large">大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" size="medium">常规</kokiri-button>
          <kokiri-button class="ButtonDemo-button" size="small">小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group">
          <kokiri-button class="ButtonDemo-button" border="dashed" size="large">大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" border="dashed" size="medium"
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" border="dashed" size="small">小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group">
          <kokiri-button class="ButtonDemo-button" border="none" size="large">大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" border="none" size="medium">常规</kokiri-button>
          <kokiri-button class="ButtonDemo-button" border="none" size="small">小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group">
          <kokiri-button class="ButtonDemo-button" color="primary" size="large">大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" color="primary" size="medium"
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" color="primary" size="small">小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group">
          <kokiri-button class="ButtonDemo-button" color="danger" size="large">大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" color="danger" size="medium">常规</kokiri-button>
          <kokiri-button class="ButtonDemo-button" color="danger" size="small">小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group ButtonDemo-darkBgLayer">
          <kokiri-button class="ButtonDemo-button" size="large" outlined>大号</kokiri-button>
          <kokiri-button class="ButtonDemo-button" size="medium" outlined>常规</kokiri-button>
          <kokiri-button class="ButtonDemo-button" size="small" outlined>小号</kokiri-button>
        </div>
        <div class="ButtonDemo-group ButtonDemo-darkBgLayer">
          <kokiri-button class="ButtonDemo-button" border="dashed" size="large" outlined
            >大号</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" border="dashed" size="medium" outlined
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" border="dashed" size="small" outlined
            >小号</kokiri-button
          >
        </div>
        <div class="ButtonDemo-group ButtonDemo-darkBgLayer">
          <kokiri-button class="ButtonDemo-button" border="none" size="large" outlined
            >大号</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" border="none" size="medium" outlined
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" border="none" size="small" outlined
            >小号</kokiri-button
          >
        </div>
        <div class="ButtonDemo-group ButtonDemo-darkBgLayer">
          <kokiri-button class="ButtonDemo-button" color="primary" size="large" outlined
            >大号</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" color="primary" size="medium" outlined
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" color="primary" size="small" outlined
            >小号</kokiri-button
          >
        </div>
        <div class="ButtonDemo-group ButtonDemo-darkBgLayer">
          <kokiri-button class="ButtonDemo-button" color="danger" size="large" outlined
            >大号</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" color="danger" size="medium" outlined
            >常规</kokiri-button
          >
          <kokiri-button class="ButtonDemo-button" color="danger" size="small" outlined
            >小号</kokiri-button
          >
        </div>
      </demo-block>
      <demo-block title="状态">
        <div class="ButtonDemo-darkBgLayer">
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button">实底实边按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" disabled>实底实边按钮（禁用）</kokiri-button>
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" outlined>线框实边按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" outlined disabled
              >线框实边按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" border="dashed">实底虚边按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" border="dashed" disabled
              >实底虚边按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" border="dashed" outlined
              >线框虚边按钮</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" border="dashed" outlined disabled
              >线框虚边按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" border="none">实底无边按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" border="none" disabled
              >实底无边按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" border="none" outlined
              >线框无边按钮</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" border="none" outlined disabled
              >线框无边按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" color="primary">实底主要按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" color="primary" disabled
              >实底主要按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" color="primary" outlined
              >线框主要按钮</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" color="primary" outlined disabled
              >线框主要按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" color="danger">实底危险按钮</kokiri-button>
            <kokiri-button class="ButtonDemo-button" color="danger" disabled
              >实底危险按钮（禁用）</kokiri-button
            >
          </div>
          <div class="ButtonDemo-group">
            <kokiri-button class="ButtonDemo-button" color="danger" outlined
              >线框危险按钮</kokiri-button
            >
            <kokiri-button class="ButtonDemo-button" color="danger" outlined disabled
              >线框危险按钮（禁用）</kokiri-button
            >
          </div>
        </div>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Button as KokiriButton } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    KokiriButton,
  },
})
export default class ButtonDemo extends Vue {}
</script>

<style lang="scss" scoped>
.ButtonDemo {
  &-button {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  &-darkBgLayer {
    padding-top: 8px;
    padding-left: 8px;
    background-color: #bec8c8;
  }

  &-group + &-group:not(&-darkBgLayer) {
    margin-top: 8px;
  }
}
</style>
