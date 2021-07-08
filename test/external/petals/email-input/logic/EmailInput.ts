import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IEmailInputComponent } from '../typing';

class EmailInputHeadlessComponent extends BaseHeadlessComponent<IEmailInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('emailInput', 'name') || 'EmailInput';
  }
}

export { EmailInputHeadlessComponent };
