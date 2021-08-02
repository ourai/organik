<template>
  <div class="FormView">
    <form-renderer
      :fields="fields"
      :value="value"
      :validation="validation"
      @change="onFieldValueChange"
    />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { getRenderer } from '../../../../utils';
import { ObjectViewWidget } from '../../base';

@Component({
  components: { FormRenderer: getRenderer('FormRenderer')! },
})
export default class FormView extends ObjectViewWidget {
  private get id() {
    return this.$route.params.id || '';
  }

  protected created(): void {
    const ctx = this.context;

    if (this.id && ctx.getOne) {
      ctx.getOne(this.id, data => {
        this.dataSource = data;
        this.context.setValue(data);
      });
    }
  }
}
</script>
