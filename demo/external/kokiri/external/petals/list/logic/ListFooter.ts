import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IListFooterComponent } from '../typing';

class ListFooterHeadlessComponent extends BaseHeadlessComponent<IListFooterComponent> {
  public getComponentName(): string {
    return getComponentConfig('listFooter', 'name') || 'ListFooter';
  }
}

export { ListFooterHeadlessComponent };
