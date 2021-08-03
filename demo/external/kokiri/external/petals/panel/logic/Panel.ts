import { BaseHeadlessComponent } from '../../basic';

import { IPanelComponent } from '../typing';
import { getPanelComponentName } from './utils';

class PanelHeadlessComponent extends BaseHeadlessComponent<IPanelComponent> {
  public getComponentName(): string {
    return getPanelComponentName();
  }

  public getClassNames(): string[] {
    const classNames: string[] = [this.getComponentName()];

    if (this.sc.fixed) {
      classNames.push(this.getModifierClassName('fixedHeight'));
    }

    return classNames;
  }
}

export { PanelHeadlessComponent };
