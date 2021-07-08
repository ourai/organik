import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ISelectComponent } from '../typing';

class SelectHeadlessComponent extends BaseHeadlessComponent<ISelectComponent> {
  public getComponentName(): string {
    return getComponentConfig('select', 'name') || 'Select';
  }
}

export { SelectHeadlessComponent };
