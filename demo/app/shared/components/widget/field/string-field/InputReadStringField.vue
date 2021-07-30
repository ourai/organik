<template>
  <span>{{ value }}</span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { FieldWidget } from '../../base';

@Component
export default class InputReadStringField extends FieldWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';
}
</script>
