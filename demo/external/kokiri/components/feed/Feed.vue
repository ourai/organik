<template>
  <box :class="$style.Feed" @click="handleClick">
    <box :class="$style['Feed-aside']" :style="asideStyle">
      <avatar :class="$style['Feed-avatar']" :src="avatar" :style="avatarStyle" />
    </box>
    <box :class="$style['Feed-content']" :style="contentStyle">
      <flex :class="$style['Feed-header']" :style="headerStyle" align="center">{{ title }}</flex>
      <box :class="$style['Feed-body']" :style="bodyStyle" v-if="$slots.default">
        <slot />
      </box>
    </box>
  </box>
</template>

<script lang="ts">
import { Component, Prop, Emit } from 'vue-property-decorator';

import { ComponentStyle } from '../../external/petals/basic';
import { IFeedComponent } from '../../external/petals/feed';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Box } from '../box';
import { Flex } from '../flex';
import { Avatar } from '../avatar';

@Component({
  name: getComponentName('feed'),
  components: {
    Box,
    Flex,
    Avatar,
  },
})
export default class Feed extends BaseStructuralComponent implements IFeedComponent {
  @Prop({ type: String, default: '' })
  public readonly avatar!: string;

  @Prop({ type: String, default: '' })
  public readonly title!: string;

  @Prop({ type: Object })
  public readonly asideStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly avatarStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly contentStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly headerStyle?: ComponentStyle;

  @Prop({ type: Object })
  public readonly bodyStyle?: ComponentStyle;

  @Emit('click')
  private handleClick() {}
}
</script>

<style src="./style.scss" lang="scss" module></style>
