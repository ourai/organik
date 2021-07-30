<template>
  <div class="FormView">
    <form-renderer :fields="fields" :value="value" @change="handleFieldValueChange" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import FormRenderer from '../../../renderer/form-renderer';
import { ObjectViewWidget } from '../../base';

@Component({
  components: { FormRenderer },
})
export default class FormView extends ObjectViewWidget {
  private value: Record<string, any> = {};

  private get id() {
    return this.$route.params.id || '';
  }

  private handleFieldValueChange(fieldName: string, value: any): void {
    this.context.setValue({ ...this.context.getValue(), [fieldName]: value });
  }

  protected created(): void {
    const ctx = this.context;

    if (this.id && ctx.getOne) {
      ctx.getOne(this.id, data => {
        this.dataSource = data;
        this.context.setValue(data);
      });
    }

    this.on('change', value => (this.value = value));
  }
}
</script>
