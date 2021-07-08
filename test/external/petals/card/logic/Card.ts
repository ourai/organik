import { BaseHeadlessComponent } from '@petals/basic';

import { ICardComponent } from '../typing';
import { getCardComponentName } from './utils';

class CardHeadlessComponent extends BaseHeadlessComponent<ICardComponent> {
  public getComponentName(): string {
    return getCardComponentName();
  }
}

export { CardHeadlessComponent };
