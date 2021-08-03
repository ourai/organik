import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IListItemComponent } from '../typing';

class ListItemHeadlessComponent extends BaseHeadlessComponent<IListItemComponent> {
  public getComponentName(): string {
    return getComponentConfig('listItem', 'name') || 'ListItem';
  }
}

export { ListItemHeadlessComponent };
