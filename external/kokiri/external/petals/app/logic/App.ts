import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IAppComponent } from '../typing';

class AppHeadlessComponent extends BaseHeadlessComponent<IAppComponent> {
  public getComponentName(): string {
    return getComponentConfig('app', 'name') || 'App';
  }
}

export { AppHeadlessComponent };
