import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { INavMenuComponent } from '../typing';

class NavMenuHeadlessComponent extends BaseHeadlessComponent<INavMenuComponent> {
  public getComponentName(): string {
    return getComponentConfig('navMenu', 'name') || 'NavMenu';
  }
}

export { NavMenuHeadlessComponent };
