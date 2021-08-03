import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { INavMenuItemComponent } from '../typing';

class NavMenuItemHeadlessComponent extends BaseHeadlessComponent<INavMenuItemComponent> {
  public getComponentName(): string {
    return getComponentConfig('navMenuItem', 'name') || 'NavMenuItem';
  }
}

export { NavMenuItemHeadlessComponent };
