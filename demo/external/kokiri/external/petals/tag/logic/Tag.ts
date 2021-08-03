import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITagComponent } from '../typing';

class TagHeadlessComponent extends BaseHeadlessComponent<ITagComponent> {
  public getComponentName(): string {
    return getComponentConfig('tag', 'name') || 'Tag';
  }
}

export { TagHeadlessComponent };
