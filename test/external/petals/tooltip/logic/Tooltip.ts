import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ITooltipComponent } from '../typing';

class TooltipHeadlessComponent extends BaseHeadlessComponent<ITooltipComponent> {
  public getComponentName(): string {
    return getComponentConfig('tooltip', 'name') || 'Tooltip';
  }
}

export { TooltipHeadlessComponent };
