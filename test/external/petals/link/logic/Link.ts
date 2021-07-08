import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ILinkComponent } from '../typing';

class LinkHeadlessComponent extends BaseHeadlessComponent<ILinkComponent> {
  public getComponentName(): string {
    return getComponentConfig('link', 'name') || 'Link';
  }
}

export { LinkHeadlessComponent };
