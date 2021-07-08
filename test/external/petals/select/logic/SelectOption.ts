import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ISelectOptionComponent } from '../typing';

class SelectOptionHeadlessComponent extends BaseHeadlessComponent<ISelectOptionComponent> {
  public getComponentName(): string {
    return getComponentConfig('selectOption', 'name') || 'SelectOption';
  }
}

export { SelectOptionHeadlessComponent };
