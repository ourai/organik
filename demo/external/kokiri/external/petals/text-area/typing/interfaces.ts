import { ResizeType } from '../../basic';
import { ITextualFormControl } from '../../form-control';

interface ITextAreaComponent extends ITextualFormControl {
  readonly row: number;
  readonly showWordLimit: boolean;
  readonly resize: ResizeType;
}

export { ITextAreaComponent };
