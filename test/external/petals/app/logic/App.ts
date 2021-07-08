import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IAppComponent } from '../typing';

class AppHeadlessComponent extends BaseHeadlessComponent<IAppComponent> {
  public getComponentName(): string {
    return getComponentConfig('app', 'name') || 'App';
  }
}

export { AppHeadlessComponent };
