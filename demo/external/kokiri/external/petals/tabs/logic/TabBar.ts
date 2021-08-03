import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITabBarComponent } from '../typing';

class TabBarHeadlessComponent extends BaseHeadlessComponent<ITabBarComponent> {
  public getComponentName(): string {
    return getComponentConfig('tabBar', 'name') || 'TabBar';
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.stretch) {
      classNames.push(this.getModifierClassName('stretch'));
    }

    return classNames;
  }
}

export { TabBarHeadlessComponent };
