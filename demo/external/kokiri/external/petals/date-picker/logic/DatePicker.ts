import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IDatePickerComponent } from '../typing';

class DatePickerHeadlessComponent extends BaseHeadlessComponent<IDatePickerComponent> {
  public getComponentName(): string {
    return getComponentConfig('datePicker', 'name') || 'DatePicker';
  }
}

export { DatePickerHeadlessComponent };
