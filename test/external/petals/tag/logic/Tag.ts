import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ITagComponent } from '../typing';

class TagHeadlessComponent extends BaseHeadlessComponent<ITagComponent> {
  public getComponentName(): string {
    return getComponentConfig('tag', 'name') || 'Tag';
  }
}

export { TagHeadlessComponent };
