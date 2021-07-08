import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IRadioComponent } from '../typing';

class RadioHeadlessComponent extends BaseHeadlessComponent<IRadioComponent> {
  public getComponentName(): string {
    return getComponentConfig('radio', 'name') || 'Radio';
  }
}

export { RadioHeadlessComponent };
