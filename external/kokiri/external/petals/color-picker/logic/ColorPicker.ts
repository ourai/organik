import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IColorPickerComponent } from '../typing';

class ColorPickerHeadlessComponent extends BaseHeadlessComponent<IColorPickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('colorPicker', 'name') || 'ColorPicker';
  }
}

export { ColorPickerHeadlessComponent };
