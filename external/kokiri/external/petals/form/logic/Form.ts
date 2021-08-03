import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFormComponent } from '../typing';

class FormHeadlessComponent extends BaseHeadlessComponent<IFormComponent> {
  public getComponentName(): string {
    return getComponentConfig('form', 'name') || 'Form';
  }
}

export { FormHeadlessComponent };
