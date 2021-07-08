import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IDropdownMenuItemComponent } from '../typing';

class DropdownMenuItemHeadlessComponent extends BaseHeadlessComponent<IDropdownMenuItemComponent> {
  public getComponentName(): string {
    return getComponentConfig('dropdownMenuItem', 'name') || 'DropdownMenuItem';
  }
}

export { DropdownMenuItemHeadlessComponent };
