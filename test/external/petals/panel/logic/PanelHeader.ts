import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IPanelHeaderComponent } from '../typing';
import { getPanelComponentName } from './utils';

class PanelHeaderHeadlessComponent extends BaseHeadlessComponent<IPanelHeaderComponent> {
  protected getDescendantOfParent(): string {
    return 'header';
  }

  public getComponentName(): string {
    return getComponentConfig('panelHeader', 'name') || 'PanelHeader';
  }

  public getParentComponentName(): string {
    return getPanelComponentName();
  }
}

export { PanelHeaderHeadlessComponent };
