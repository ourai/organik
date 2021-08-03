<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getRenderer } from '../../../../utils';
import { ObjectViewWidget } from '../../base';

@Component
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

  private render(h: CreateElement): VNode {
    return h('div', { staticClass: 'FormView' }, [
      h(getRenderer('FormRenderer'), {
        props: { fields: this.fields, value: this.value, validation: this.validation },
        on: { change: this.onFieldValueChange },
      }),
    ]);
  }
}
</script>
