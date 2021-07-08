import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { INavMenuItemComponent } from '../typing';

class NavMenuItemHeadlessComponent extends BaseHeadlessComponent<INavMenuItemComponent> {
  public getComponentName(): string {
    return getComponentConfig('navMenuItem', 'name') || 'NavMenuItem';
  }
}

export { NavMenuItemHeadlessComponent };
