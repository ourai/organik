<template>
  <el-radio-group v-model="internalValue" @change="onChange">
    <el-radio :label="opt.value" :value="opt.value" :key="opt.name" v-for="opt in options">{{
      opt.label
    }}</el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ElRadio, { RadioGroup as ElRadioGroup } from '../../../control/radio';
import { EnumFieldWidget } from '../../base';

@Component({ components: { ElRadio, ElRadioGroup } })
export default class RadioGroupEditEnumField extends EnumFieldWidget {}
</script>
