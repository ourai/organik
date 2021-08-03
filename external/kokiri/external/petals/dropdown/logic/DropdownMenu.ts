import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDropdownMenuComponent } from '../typing';

class DropdownMenuHeadlessComponent extends BaseHeadlessComponent<IDropdownMenuComponent> {
  public getComponentName(): string {
    return getComponentConfig('dropdownMenu', 'name') || 'DropdownMenu';
  }
}

export { DropdownMenuHeadlessComponent };
