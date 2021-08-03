import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { ITimePickerComponent } from '../typing';

class TimePickerHeadlessComponent extends BaseHeadlessComponent<ITimePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('timePicker', 'name') || 'TimePicker';
  }
}

export { TimePickerHeadlessComponent };
