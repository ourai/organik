<template>
  <p>{{ value }}</p>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { FieldWidget } from '../../base';

@Component
export default class TextareaReadTextField extends FieldWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';
}
</script>
