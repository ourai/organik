import { IPopupComponent } from '../../popup';

import { PopconfirmButton } from './aliases';

interface IPopconfirm extends Omit<IPopupComponent, 'trigger'> {
  readonly icon: string;
  readonly yesButton: PopconfirmButton;
  readonly noButton: PopconfirmButton;
}

export { IPopconfirm };
