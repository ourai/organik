import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ITabPaneComponent } from '../typing';
import { getTabsComponentName } from './utils';

class TabPaneHeadlessComponent extends BaseHeadlessComponent<ITabPaneComponent> {
  // protected getDescendantOfParent(): string {
  //   return 'pane';
  // }

  public getComponentName(): string {
    return getComponentConfig('tabPane', 'name') || 'TabPane';
  }

  public getParentComponentName(): string {
    return getTabsComponentName();
  }
}

export { TabPaneHeadlessComponent };
