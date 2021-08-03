import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITextAreaComponent } from '../typing';

class TextAreaHeadlessComponent extends BaseHeadlessComponent<ITextAreaComponent> {
  public getComponentName(): string {
    return getComponentConfig('textArea', 'name') || 'TextArea';
  }
}

export { TextAreaHeadlessComponent };
