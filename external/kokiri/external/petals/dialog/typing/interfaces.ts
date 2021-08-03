import { DialogWidth, DialogButton } from './aliases';

interface IDialogComponent {
  readonly title: string;
  readonly width: DialogWidth;
  readonly visible: boolean;
  readonly centered: boolean;
  readonly yesButton: DialogButton;
  readonly noButton: DialogButton;
}

export { IDialogComponent };
