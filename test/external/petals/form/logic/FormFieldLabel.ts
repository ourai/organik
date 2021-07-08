import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IFormFieldLabelComponent } from '../typing';

class FormFieldLabelHeadlessComponent extends BaseHeadlessComponent<IFormFieldLabelComponent> {
  public getComponentName(): string {
    return getComponentConfig('formFieldLabel', 'name') || 'FormFieldLabel';
  }
}

export { FormFieldLabelHeadlessComponent };
