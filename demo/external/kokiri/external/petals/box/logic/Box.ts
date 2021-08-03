import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IBoxComponent } from '../typing';

class BoxHeadlessComponent extends BaseHeadlessComponent<IBoxComponent> {
  public getComponentName(): string {
    return getComponentConfig('box', 'name') || 'Box';
  }
}

export { BoxHeadlessComponent };
