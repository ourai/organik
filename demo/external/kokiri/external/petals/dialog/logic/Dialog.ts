import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDialogComponent } from '../typing';

class DialogHeadlessComponent extends BaseHeadlessComponent<IDialogComponent> {
  public getComponentName(): string {
    return getComponentConfig('dialog', 'name') || 'Dialog';
  }
}

export { DialogHeadlessComponent };
