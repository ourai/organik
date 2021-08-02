<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getRenderer } from '../../../../utils';
import KokiriButton from '../../../control/button';
import ElForm, { FormItem as ElFormItem } from '../../../control/form';
import { SearchWidget } from '../../base';

@Component
export default class FormSearch extends SearchWidget {
  protected created(): void {
    this.initCondition();
  }

  private render(h: CreateElement): VNode {
    const children: VNode[] = this.filters.map(filter =>
      h(ElFormItem, { props: { label: filter.label } }, [
        h(getRenderer('FilterRenderer'), {
          props: { filter, value: this.condition[filter.name] },
          on: { change: this.setFilterValue },
        }),
      ]),
    );

    children.push(
      h(
        KokiriButton,
        {
          props: { color: 'primary' },
          on: {
            click: evt => {
              this.submit();
              evt.preventDefault();
            },
          },
        },
        '查询',
      ),
      h(
        KokiriButton,
        {
          on: {
            click: evt => {
              this.reset();
              evt.preventDefault();
            },
          },
        },
        '查询',
      ),
    );

    return h('div', { staticClass: 'FormSearch' }, [
      h(ElForm, { props: { model: this.condition, size: 'small', inline: true } }, children),
    ]);
  }
}
</script>
