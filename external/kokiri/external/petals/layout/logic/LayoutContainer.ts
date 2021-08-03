import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ILayoutContainerComponent } from '../typing';

class LayoutContainerHeadlessComponent extends BaseHeadlessComponent<ILayoutContainerComponent> {
  public getComponentName(): string {
    return getComponentConfig('layoutContainer', 'name') || 'LayoutContainer';
  }
}

export { LayoutContainerHeadlessComponent };
