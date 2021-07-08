import { PopupPosition, PopupTrigger } from './aliases';

interface IPopupComponent {
  readonly content: string;
  readonly position: PopupPosition;
  readonly trigger: PopupTrigger;
}

export { IPopupComponent };
