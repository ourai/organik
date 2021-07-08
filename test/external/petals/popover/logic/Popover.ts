import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IPopoverComponent } from '../typing';

class PopoverHeadlessComponent extends BaseHeadlessComponent<IPopoverComponent> {
  public getComponentName(): string {
    return getComponentConfig('popover', 'name') || 'Popover';
  }
}

export { PopoverHeadlessComponent };
