import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IFileUploadComponent } from '../typing';

class FileUploadHeadlessComponent extends BaseHeadlessComponent<IFileUploadComponent> {
  public getComponentName(): string {
    return getComponentConfig('fileUpload', 'name') || 'FileUpload';
  }
}

export { FileUploadHeadlessComponent };
