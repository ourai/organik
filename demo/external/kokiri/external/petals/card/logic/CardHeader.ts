import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ICardHeaderComponent } from '../typing';
import { getCardComponentName } from './utils';

class CardHeaderHeadlessComponent extends BaseHeadlessComponent<ICardHeaderComponent> {
  protected getDescendantOfParent(): string {
    return 'header';
  }

  public getComponentName(): string {
    return getComponentConfig('cardHeader', 'name') || 'CardHeader';
  }

  public getParentComponentName(): string {
    return getCardComponentName();
  }

  public getClassNames(): string[] {
    const classNames: string[] = super.getClassNames();

    if (this.sc.image) {
      classNames.push(this.getModifierClassName('hasImage'));
    }

    return classNames;
  }
}

export { CardHeaderHeadlessComponent };
