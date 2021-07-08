import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IColorPickerComponent } from '../typing';

class ColorPickerHeadlessComponent extends BaseHeadlessComponent<IColorPickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('colorPicker', 'name') || 'ColorPicker';
  }
}

export { ColorPickerHeadlessComponent };
