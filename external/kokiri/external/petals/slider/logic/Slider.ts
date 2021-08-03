import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ISliderComponent } from '../typing';

class SliderHeadlessComponent extends BaseHeadlessComponent<ISliderComponent> {
  public getComponentName(): string {
    return getComponentConfig('slider', 'name') || 'Slider';
  }
}

export { SliderHeadlessComponent };
