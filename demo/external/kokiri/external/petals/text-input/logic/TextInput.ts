import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITextInputComponent } from '../typing';

class TextInputHeadlessComponent extends BaseHeadlessComponent<ITextInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('textInput', 'name') || 'TextInput';
  }
}

export { TextInputHeadlessComponent };
