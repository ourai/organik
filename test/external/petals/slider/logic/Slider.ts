import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { ISliderComponent } from '../typing';

class SliderHeadlessComponent extends BaseHeadlessComponent<ISliderComponent> {
  public getComponentName(): string {
    return getComponentConfig('slider', 'name') || 'Slider';
  }
}

export { SliderHeadlessComponent };
