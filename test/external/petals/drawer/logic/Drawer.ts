import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IDrawerComponent } from '../typing';

class DrawerHeadlessComponent extends BaseHeadlessComponent<IDrawerComponent> {
  public getComponentName(): string {
    return getComponentConfig('drawer', 'name') || 'Drawer';
  }
}

export { DrawerHeadlessComponent };
