import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { INavSubMenuComponent } from '../typing';

class NavSubMenuHeadlessComponent extends BaseHeadlessComponent<INavSubMenuComponent> {
  public getComponentName(): string {
    return getComponentConfig('navSubMenu', 'name') || 'NavSubMenu';
  }
}

export { NavSubMenuHeadlessComponent };
