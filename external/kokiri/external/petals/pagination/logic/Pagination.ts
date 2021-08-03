import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IPaginationComponent } from '../typing';

class PaginationHeadlessComponent extends BaseHeadlessComponent<IPaginationComponent> {
  public getComponentName(): string {
    return getComponentConfig('pagination', 'name') || 'Pagination';
  }
}

export { PaginationHeadlessComponent };
