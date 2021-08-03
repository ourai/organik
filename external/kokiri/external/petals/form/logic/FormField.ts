import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFormFieldComponent } from '../typing';

class FormFieldHeadlessComponent extends BaseHeadlessComponent<IFormFieldComponent> {
  public getComponentName(): string {
    return getComponentConfig('formField', 'name') || 'FormField';
  }
}

export { FormFieldHeadlessComponent };
