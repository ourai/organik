import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ITabNavComponent } from '../typing';

class TabNavHeadlessComponent extends BaseHeadlessComponent<ITabNavComponent> {
  public getComponentName(): string {
    return getComponentConfig('tabNav', 'name') || 'TabNav';
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.active) {
      classNames.push('is-active');
    }

    if (this.sc.disabled) {
      classNames.push('is-disabled');
    }

    return classNames;
  }
}

export { TabNavHeadlessComponent };
