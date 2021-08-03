import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDateTimePickerComponent } from '../typing';

class DateTimePickerHeadlessComponent extends BaseHeadlessComponent<IDateTimePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('dateTimePicker', 'name') || 'DateTimePicker';
  }
}

export { DateTimePickerHeadlessComponent };
