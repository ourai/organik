import { getControl, getRenderer } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SearchWidget } from '../../../base';

@Component
export default class FormSearch extends SearchWidget {
  protected created(): void {
    this.initCondition();
  }

  private render(h: CreateElement): VNode {
    const children: VNode[] = this.filters.map(filter =>
      h(getControl('FormItem'), { props: { label: filter.label } }, [
        h(getRenderer('FilterRenderer'), {
          props: { filter, value: this.condition[filter.name] },
          on: { change: this.setFilterValue },
        }),
      ]),
    );

    children.push(
      h(
        getControl('Button'),
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
        getControl('Button'),
        {
          on: {
            click: evt => {
              this.reset();
              evt.preventDefault();
            },
          },
        },
        '重置',
      ),
    );

    return h('div', { staticClass: 'FormSearch' }, [
      h(
        getControl('Form'),
        { props: { model: this.condition, size: 'small', inline: true } },
        children,
      ),
    ]);
  }
}
