import { ResizeType } from '@petals/basic';
import { ITextualFormControl } from '@petals/form-control';

interface ITextAreaComponent extends ITextualFormControl {
  readonly row: number;
  readonly showWordLimit: boolean;
  readonly resize: ResizeType;
}

export { ITextAreaComponent };
