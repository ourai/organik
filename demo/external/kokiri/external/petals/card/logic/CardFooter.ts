import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ICardFooterComponent } from '../typing';
import { getCardComponentName } from './utils';

class CardFooterHeadlessComponent extends BaseHeadlessComponent<ICardFooterComponent> {
  protected getDescendantOfParent(): string {
    return 'footer';
  }

  public getComponentName(): string {
    return getComponentConfig('cardFooter', 'name') || 'CardFooter';
  }

  public getParentComponentName(): string {
    return getCardComponentName();
  }
}

export { CardFooterHeadlessComponent };
