import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IUrlInputComponent } from '../typing';

class UrlInputHeadlessComponent extends BaseHeadlessComponent<IUrlInputComponent> {
  public getComponentName(): string {
    return getComponentConfig('urlInput', 'name') || 'UrlInput';
  }
}

export { UrlInputHeadlessComponent };
