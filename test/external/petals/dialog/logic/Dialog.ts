import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IDialogComponent } from '../typing';

class DialogHeadlessComponent extends BaseHeadlessComponent<IDialogComponent> {
  public getComponentName(): string {
    return getComponentConfig('dialog', 'name') || 'Dialog';
  }
}

export { DialogHeadlessComponent };
