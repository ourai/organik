import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ISearchComponent } from '../typing';

class SearchHeadlessComponent extends BaseHeadlessComponent<ISearchComponent> {
  public getComponentName(): string {
    return getComponentConfig('search', 'name') || 'Search';
  }
}

export { SearchHeadlessComponent };
