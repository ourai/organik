<template>
  <span>{{ value.length }}</span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { TableFieldWidget } from '@/components/widget/base';

import { AnimationEntity } from '../../typing';

@Component
export default class AnimationListEpisodesField extends TableFieldWidget<AnimationEntity> {
  @Prop({ type: Array, default: () => [] })
  private readonly value!: string[];
}
</script>
