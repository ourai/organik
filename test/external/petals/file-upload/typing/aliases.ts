import { FileFormControlValue } from '@petals/form-control';

type UploadFile = FileFormControlValue & {
  name: string;
  url: string;
};

type FileUploadValue = UploadFile[];

type FileUploadRequestOption = {
  name?: string;
  method?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
};

export { UploadFile, FileUploadValue, FileUploadRequestOption };
