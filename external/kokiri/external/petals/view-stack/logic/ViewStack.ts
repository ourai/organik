import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IViewStackComponent } from '../typing';

class ViewStackHeadlessComponent extends BaseHeadlessComponent<IViewStackComponent> {
  public getComponentName(): string {
    return getComponentConfig('viewStack', 'name') || 'ViewStack';
  }
}

export { ViewStackHeadlessComponent };
