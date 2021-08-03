import { getComponentConfig, normalizeLooseSize, BaseHeadlessComponent } from '../../basic';

import { ILayoutHeaderComponent } from '../typing';

class LayoutHeaderHeadlessComponent extends BaseHeadlessComponent<ILayoutHeaderComponent> {
  public getComponentName(): string {
    return getComponentConfig('layoutHeader', 'name') || 'LayoutHeader';
  }

  public getHeight(): string {
    return normalizeLooseSize(this.sc.height);
  }
}

export { LayoutHeaderHeadlessComponent };
