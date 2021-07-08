import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IListItemComponent } from '../typing';

class ListItemHeadlessComponent extends BaseHeadlessComponent<IListItemComponent> {
  public getComponentName(): string {
    return getComponentConfig('listItem', 'name') || 'ListItem';
  }
}

export { ListItemHeadlessComponent };
