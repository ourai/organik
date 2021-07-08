<template>
  <demo-container title="图片 Image">
    <demo-section title="演示">
      <demo-block title="基础用法">
        <kokiri-image
          class="ImageDemo-image"
          alt="这是一张图"
          :src="imageSrc"
          :width="imageWidth"
          @load="handleLoad"
          @error="handleError"
        />
      </demo-block>
      <demo-block title="加载失败">
        <kokiri-image
          class="ImageDemo-image"
          alt="这是一张图"
          src="fake-src"
          :width="imageWidth"
          @load="handleNoFallbackLoad"
          @error="handleNoFallbackError"
        />
        <kokiri-image
          class="ImageDemo-image"
          alt="这是一张图"
          src="fake-src"
          :fallback="imageFallback"
          :width="imageWidth"
          @load="handleFallbackLoad"
          @error="handleFallbackError"
          @click="handleClick"
        />
      </demo-block>
      <demo-block title="适应容器">
        <div class="ImageDemo-group">
          <kokiri-image
            class="ImageDemo-image"
            alt="这是一张图"
            :src="imageSrc"
            :width="fitSize"
            :height="fitSize"
            :fit="type"
            :key="type"
            @load="handleLoad"
            @error="handleError"
            @click="handleClick"
            v-for="type in fitTypes"
          />
        </div>
        <div class="ImageDemo-group">
          <kokiri-image
            class="ImageDemo-image"
            alt="这是一张图"
            src="fake-src"
            :fallback="imageFallback"
            :width="fitSize"
            :height="fitSize"
            :fit="type"
            :key="`fallback-${type}`"
            @load="handleLoad"
            @error="handleError"
            @click="handleClick"
            v-for="type in fitTypes"
          />
        </div>
      </demo-block>
    </demo-section>
  </demo-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Image as KokiriImage } from '../../components';
import { DemoContainer, DemoSection, DemoBlock } from '../containers';

@Component({
  components: {
    DemoContainer,
    DemoSection,
    DemoBlock,
    KokiriImage,
  },
})
export default class ImageDemo extends Vue {
  private imageSrc: string =
    'https://ourai.ws/assets/banners/geek-7bdba86ee985cc0661158c3d450038c94b22159f87662d92d0d82227ce68e28e.jpg';

  private imageFallback: string =
    'https://ourai.ws/assets/banners/ourai-in-shanghai-mono-43b11ac0260be96696ed32f69c574e3eb29050cd043cdf431688464410bd6f6b.jpg';

  private imageWidth: number = 250;

  private fitSize: number = 150;

  private fitTypes: string[] = ['none', 'cover', 'contain'];

  private handleLoad(evt) {
    console.log('load', evt);
  }

  private handleError(evt) {
    console.log('error', evt);
  }

  private handleNoFallbackLoad(evt) {
    console.log('no fallback load', evt);
  }

  private handleNoFallbackError(evt) {
    console.log('no fallback error', evt);
  }

  private handleFallbackLoad(evt) {
    console.log('has fallback load', evt);
  }

  private handleFallbackError(evt) {
    console.log('has fallback error', evt);
  }

  private handleClick(evt) {
    console.log('click', evt);
  }
}
</script>

<style lang="scss" scoped>
.ImageDemo {
  &-image {
    margin-right: 8px;
    background-color: #ccc;
  }

  &-group + &-group {
    margin-top: 8px;
  }
}
</style>
