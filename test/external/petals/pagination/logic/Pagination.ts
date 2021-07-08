import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IPaginationComponent } from '../typing';

class PaginationHeadlessComponent extends BaseHeadlessComponent<IPaginationComponent> {
  public getComponentName(): string {
    return getComponentConfig('pagination', 'name') || 'Pagination';
  }
}

export { PaginationHeadlessComponent };
