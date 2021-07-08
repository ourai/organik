import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ISpinnerComponent } from '../typing';

class SpinnerHeadlessComponent extends BaseHeadlessComponent<ISpinnerComponent> {
  public getComponentName(): string {
    return getComponentConfig('spinner', 'name') || 'Spinner';
  }
}

export { SpinnerHeadlessComponent };
