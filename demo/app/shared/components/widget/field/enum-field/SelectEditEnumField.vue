<template>
  <el-select :clearable="!field.required" v-model="internalValue" @change="onChange">
    <el-option :label="opt.label" :value="opt.value" :key="opt.name" v-for="opt in options" />
  </el-select>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ElSelect, { Option as ElOption } from '../../../control/select';
import { EnumFieldWidget } from '../../base';

@Component({ components: { ElSelect, ElOption } })
export default class SelectEditEnumField extends EnumFieldWidget {}
</script>
