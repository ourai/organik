import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IPopconfirm } from '../typing';

class PopconfirmHeadlessComponent extends BaseHeadlessComponent<IPopconfirm> {
  public getComponentName(): string {
    return getComponentConfig('popconfirm', 'name') || 'Popconfirm';
  }
}

export { PopconfirmHeadlessComponent };
