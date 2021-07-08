import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ICheckboxComponent } from '../typing';

class CheckboxHeadlessComponent extends BaseHeadlessComponent<ICheckboxComponent> {
  public getComponentName(): string {
    return getComponentConfig('checkbox', 'name') || 'Checkbox';
  }
}

export { CheckboxHeadlessComponent };
