<template>
  <div :class="getComponentClassNames()" :style="computedStyle">
    <div
      :class="getDescendantClassName('substitute')"
      :style="{ backgroundImage: `url('${sourceUrl}')` }"
      v-if="showSubstitute"
    ></div>
    <img
      :class="getDescendantClassName('content')"
      :src="sourceUrl"
      :alt="alt"
      @load="handleLoad"
      @error="handleError"
      v-on="filteredListeners"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from 'vue-property-decorator';

import { ComponentStyle } from '@petals/basic';
import { ImageFit, ImageSize, IImageComponent, ImageHeadlessComponent } from '@petals/image';

import { getComponentName, BaseStructuralComponent } from '../basic';

type ImageComponentEventListeners = Record<string, Function | Function[]>; // eslint-disable-line @typescript-eslint/ban-types

@Component({
  name: getComponentName('image'),
})
export default class Image
  extends BaseStructuralComponent<ImageHeadlessComponent>
  implements IImageComponent {
  @Prop({ type: String, default: '' })
  public readonly src!: string;

  @Prop({ type: String, default: '' })
  public readonly fallback!: string;

  @Prop({ type: String, default: '' })
  public readonly alt!: string;

  @Prop({ type: String, default: 'none' })
  public readonly fit!: ImageFit;

  @Prop({ type: [Number, String], default: 'none' })
  public readonly width!: ImageSize;

  @Prop({ type: [Number, String], default: 'none' })
  public readonly height!: ImageSize;

  private sourceUrl: string = '';

  private fallbackUsed!: boolean;

  private get computedStyle(): ComponentStyle {
    const hc: ImageHeadlessComponent = this.getHeadlessComponent()!;

    const width: string = hc.getWidth();
    const height: string = hc.getHeight();

    const style: ComponentStyle = {};

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
    }

    return style;
  }

  private get filteredListeners(): ImageComponentEventListeners {
    const oldListeners: ImageComponentEventListeners = this.$listeners;
    const listeners: ImageComponentEventListeners = {};

    Object.keys(oldListeners).forEach(eventName => {
      if (eventName !== 'load' && eventName !== 'error') {
        listeners[eventName] = oldListeners[eventName];
      }
    });

    return listeners;
  }

  private get showSubstitute(): boolean {
    return this.getHeadlessComponent()!.needFit();
  }

  @Watch('src', { immediate: true })
  private handleSrcPropChange(src: string): void {
    this.sourceUrl = src;
    this.fallbackUsed = false;
  }

  private handleLoad(evt: Event): void {
    if (this.fallbackUsed) {
      return;
    }

    this.$emit('load', evt);
  }

  private handleError(evt: Event): void {
    if (this.fallbackUsed) {
      return;
    }

    this.sourceUrl = this.fallback;
    this.fallbackUsed = true;

    this.$emit('error', evt);
  }

  public created(): void {
    this.setHeadlessComponent(new ImageHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
