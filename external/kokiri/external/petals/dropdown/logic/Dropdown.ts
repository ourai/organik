import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDropdownComponent } from '../typing';

class DropdownHeadlessComponent extends BaseHeadlessComponent<IDropdownComponent> {
  public getComponentName(): string {
    return getComponentConfig('dropdown', 'name') || 'Dropdown';
  }
}

export { DropdownHeadlessComponent };
