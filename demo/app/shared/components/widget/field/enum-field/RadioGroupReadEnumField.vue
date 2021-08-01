<template>
  <span>{{ displayText }}</span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { EnumFieldWidget } from '../../base';

@Component
export default class RadioGroupReadEnumField extends EnumFieldWidget {}
</script>
