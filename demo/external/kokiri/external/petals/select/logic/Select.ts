import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ISelectComponent } from '../typing';

class SelectHeadlessComponent extends BaseHeadlessComponent<ISelectComponent> {
  public getComponentName(): string {
    return getComponentConfig('select', 'name') || 'Select';
  }
}

export { SelectHeadlessComponent };
