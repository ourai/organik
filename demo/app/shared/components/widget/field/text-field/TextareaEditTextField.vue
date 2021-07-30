<template>
  <el-input type="textarea" :value="value" @input="onChange" />
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import ElInput from '../../../control/input';
import { FieldWidget } from '../../base';

@Component({
  components: { ElInput },
})
export default class TextareaEditTextField extends FieldWidget<string> {
  @Prop({ type: String, default: '' })
  protected readonly value: string = '';
}
</script>
