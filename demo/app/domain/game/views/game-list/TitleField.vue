<template>
  <a :href="`https://otaku.ourai.ws/games/${row.id}/`" target="_blank">{{ value }}</a>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { TableFieldWidget } from '@/components/widget/base';

import { GameEntity } from '../../typing';

@Component
export default class GameListTitleField extends TableFieldWidget<GameEntity> {
  @Prop({ type: String, default: '' })
  private readonly value!: string;
}
</script>
