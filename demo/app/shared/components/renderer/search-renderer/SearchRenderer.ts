import { VueConstructor, CreateElement, VNode } from 'vue';
import { Vue, Component, Inject } from 'vue-property-decorator';

import { ListViewContext } from '../../../types';
import { isFunction } from '../../../utils';
import FormSearch from '../../widget/form-search';

@Component({
  // @ts-ignore
  abstract: true,
})
export default class SearchRenderer extends Vue {
  @Inject({ from: 'viewContext', default: null })
  private readonly context!: ListViewContext;

  private render(h: CreateElement): VNode | null {
    const search = this.context.getSearch();

    return h(isFunction(search) ? (search as VueConstructor) : FormSearch);
  }
}
