<template>
  <el-input :value="value" @input="onChange" />
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import ElInput from '../../../control/input';
import { FilterWidget } from '../../base';

@Component({ components: { ElInput } })
export default class InputTextFilter extends FilterWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';
}
</script>
