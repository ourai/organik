<template>
  <a :href="`https://otaku.ourai.ws/animations/${row.id}/`" target="_blank">{{ value }}</a>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { TableFieldWidget } from 'handie-vue';

import { AnimationEntity } from '../../typing';

@Component
export default class AnimationListTitleField extends TableFieldWidget<AnimationEntity> {
  @Prop({ type: String, default: '' })
  private readonly value!: string;
}
</script>
