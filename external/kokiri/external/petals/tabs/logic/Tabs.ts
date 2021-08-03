import { BaseHeadlessComponent } from '../../basic';

import { ITabsComponent } from '../typing';
import { getTabsComponentName } from './utils';

class TabsHeadlessComponent extends BaseHeadlessComponent<ITabsComponent> {
  public getComponentName(): string {
    return getTabsComponentName();
  }

  public getClassNames(): string[] {
    const classNames: string[] = [
      ...super.getClassNames(),
      this.getModifierClassName(this.sc.tabBarPosition),
    ];

    if (this.sc.fixed) {
      classNames.push(this.getModifierClassName('fixedHeight'));
    }

    return classNames;
  }
}

export { TabsHeadlessComponent };
