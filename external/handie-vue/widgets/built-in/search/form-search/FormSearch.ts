import { isNumber } from '@ntks/toolbox';
import { getControl, getRenderer } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SearchWidget } from '../../../base';
import defaultBehaviors from './behavior';

@Component
export default class FormSearch extends SearchWidget {
  private resolveLabelWidth(): string {
    const labelWidth = this.getBehavior('formControlLabelWidth');

    return isNumber(labelWidth) ? `${labelWidth}px` : labelWidth;
  }

  protected created(): void {
    this.setBehaviors('search.form', defaultBehaviors);
    this.initCondition();
  }

  private render(h: CreateElement): VNode {
    const formControlSize = this.getBehavior('formControlSize');
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
          props: { color: 'primary', size: formControlSize },
          on: {
            click: evt => {
              this.submit();
              evt.preventDefault();
            },
          },
        },
        '查询',
      ),
    );

    if (this.getBehavior('resettable') === true) {
      children.push(
        h(
          getControl('Button'),
          {
            props: { size: formControlSize },
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
    }

    return h('div', { staticClass: 'FormSearch' }, [
      h(
        getControl('Form'),
        {
          props: {
            model: this.condition,
            size: formControlSize,
            inline: this.getBehavior('formLayout') === 'inline',
            labelWidth: this.resolveLabelWidth(),
          },
        },
        children,
      ),
    ]);
  }
}
