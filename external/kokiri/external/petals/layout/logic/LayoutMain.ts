import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ILayoutMainComponent } from '../typing';

class LayoutMainHeadlessComponent extends BaseHeadlessComponent<ILayoutMainComponent> {
  public getComponentName(): string {
    return getComponentConfig('layoutMain', 'name') || 'LayoutMain';
  }
}

export { LayoutMainHeadlessComponent };
