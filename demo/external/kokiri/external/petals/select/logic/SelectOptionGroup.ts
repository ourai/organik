import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ISelectOptionGroupComponent } from '../typing';

class SelectOptionGroupHeadlessComponent extends BaseHeadlessComponent<ISelectOptionGroupComponent> {
  public getComponentName(): string {
    return getComponentConfig('selectOptionGroup', 'name') || 'SelectOptionGroup';
  }
}

export { SelectOptionGroupHeadlessComponent };
