import { getComponentConfig, normalizeLooseSize, BaseHeadlessComponent } from '../../basic';

import { ILayoutAsideComponent } from '../typing';

class LayoutAsideHeadlessComponent extends BaseHeadlessComponent<ILayoutAsideComponent> {
  public getComponentName(): string {
    return getComponentConfig('layoutAside', 'name') || 'LayoutAside';
  }

  public getWidth(): string {
    return normalizeLooseSize(this.sc.width);
  }
}

export { LayoutAsideHeadlessComponent };
