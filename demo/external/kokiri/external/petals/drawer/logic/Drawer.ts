import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDrawerComponent } from '../typing';

class DrawerHeadlessComponent extends BaseHeadlessComponent<IDrawerComponent> {
  public getComponentName(): string {
    return getComponentConfig('drawer', 'name') || 'Drawer';
  }
}

export { DrawerHeadlessComponent };
