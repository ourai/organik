import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ISwitchComponent } from '../typing';

class SwitchHeadlessComponent extends BaseHeadlessComponent<ISwitchComponent> {
  public getComponentName(): string {
    return getComponentConfig('switch', 'name') || 'Switch';
  }
}

export { SwitchHeadlessComponent };
