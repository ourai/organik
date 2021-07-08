import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IListHeaderComponent } from '../typing';

class ListHeaderHeadlessComponent extends BaseHeadlessComponent<IListHeaderComponent> {
  public getComponentName(): string {
    return getComponentConfig('listHeader', 'name') || 'ListHeader';
  }
}

export { ListHeaderHeadlessComponent };
