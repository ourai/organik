import { getComponentConfig, normalizeLooseSize, BaseHeadlessComponent } from '../../basic';

import { ILayoutFooterComponent } from '../typing';

class LayoutFooterHeadlessComponent extends BaseHeadlessComponent<ILayoutFooterComponent> {
  public getComponentName(): string {
    return getComponentConfig('layoutFooter', 'name') || 'LayoutFooter';
  }

  public getHeight(): string {
    return normalizeLooseSize(this.sc.height);
  }
}

export { LayoutFooterHeadlessComponent };
