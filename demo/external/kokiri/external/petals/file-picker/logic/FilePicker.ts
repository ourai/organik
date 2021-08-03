import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IFilePickerComponent } from '../typing';

class FilePickerHeadlessComponent extends BaseHeadlessComponent<IFilePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('filePicker', 'name') || 'FilePicker';
  }
}

export { FilePickerHeadlessComponent };
