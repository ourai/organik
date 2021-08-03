import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IBreadcrumbComponent } from '../typing';

class BreadcrumbHeadlessComponent extends BaseHeadlessComponent<IBreadcrumbComponent> {
  public getComponentName(): string {
    return getComponentConfig('breadcrumb', 'name') || 'Breadcrumb';
  }
}

export { BreadcrumbHeadlessComponent };
