import { IFileFormControl } from '../../form-control';

import { FileUploadValue, FileUploadRequestOption } from './aliases';

interface IFileUploadComponent extends IFileFormControl<FileUploadValue> {
  readonly request: string;
  readonly requestOption: FileUploadRequestOption;
  readonly limit: number;
  readonly immediate: boolean;
}

export { IFileUploadComponent };
