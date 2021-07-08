import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IListComponent } from '../typing';

class ListHeadlessComponent extends BaseHeadlessComponent<IListComponent> {
  public getComponentName(): string {
    return getComponentConfig('list', 'name') || 'List';
  }

  public getClassNames(): string[] {
    const classNames: string[] = [this.getComponentName()];

    if (this.sc.bordered) {
      classNames.push(this.getModifierClassName('bordered'));
    }

    if (this.sc.divided) {
      classNames.push(this.getModifierClassName('divided'));
    }

    return classNames;
  }
}

export { ListHeadlessComponent };
