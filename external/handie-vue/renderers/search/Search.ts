import { isFunction } from '@ntks/toolbox';
import { ListViewContext, getWidget } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Inject } from 'vue-property-decorator';

import { ComponentCtor } from '../../types/component';

@Component({
  // @ts-ignore
  abstract: true,
})
export default class SearchRenderer extends Vue {
  @Inject({ from: 'viewContext', default: null })
  private readonly context!: ListViewContext;

  private render(h: CreateElement): VNode | null {
    const search = this.context.getSearch();

    return h(isFunction(search) ? (search as ComponentCtor) : getWidget('FormSearch'));
  }
}
