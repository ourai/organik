<template>
  <div class="DetailView">
    <form-renderer :fields="fields" :value="value" readonly />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import FormRenderer from '../../../renderer/form-renderer';
import { ObjectViewWidget } from '../../base';

@Component({
  components: { FormRenderer },
})
export default class DetailView extends ObjectViewWidget {
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
