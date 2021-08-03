import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IPasswordComponent } from '../typing';

class PasswordHeadlessComponent extends BaseHeadlessComponent<IPasswordComponent> {
  public getComponentName(): string {
    return getComponentConfig('password', 'name') || 'Password';
  }
}

export { PasswordHeadlessComponent };
