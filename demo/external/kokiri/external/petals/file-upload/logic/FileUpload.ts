import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFileUploadComponent } from '../typing';

class FileUploadHeadlessComponent extends BaseHeadlessComponent<IFileUploadComponent> {
  public getComponentName(): string {
    return getComponentConfig('fileUpload', 'name') || 'FileUpload';
  }
}

export { FileUploadHeadlessComponent };
