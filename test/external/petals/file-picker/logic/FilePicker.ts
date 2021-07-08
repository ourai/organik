import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IFilePickerComponent } from '../typing';

class FilePickerHeadlessComponent extends BaseHeadlessComponent<IFilePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('filePicker', 'name') || 'FilePicker';
  }
}

export { FilePickerHeadlessComponent };
