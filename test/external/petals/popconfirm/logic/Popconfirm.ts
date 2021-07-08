import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IPopconfirm } from '../typing';

class PopconfirmHeadlessComponent extends BaseHeadlessComponent<IPopconfirm> {
  public getComponentName(): string {
    return getComponentConfig('popconfirm', 'name') || 'Popconfirm';
  }
}

export { PopconfirmHeadlessComponent };
