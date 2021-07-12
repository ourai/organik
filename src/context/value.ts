import { clone } from '@ntks/toolbox';

import {
  DataValue,
  ValueContextDescriptor,
  ValueEvents,
  ValueContext as IValueContext,
} from '../core';
import { EventEmitter } from '../event';

class ValueContext<ValueType extends DataValue = DataValue, EventNames extends string = ValueEvents>
  extends EventEmitter<EventNames>
  implements IValueContext<ValueType, EventNames> {
  private defaultValue: ValueType;
  private value: ValueType;
  private valueInited: boolean = false;

  constructor({ defaultValue, initialValue }: ValueContextDescriptor<ValueType>) {
    super();

    this.defaultValue = clone(defaultValue);
    this.value = initialValue ? clone(initialValue) : clone(defaultValue);
  }

  public getDefaultValue(): ValueType {
    return clone(this.defaultValue);
  }

  public getValue(): ValueType {
    return clone(this.value);
  }

  public setValue(value: ValueType): void {
    this.value = clone(value);
    this.emit('change', this.getValue());

    if (!this.valueInited) {
      this.valueInited = true;
      this.emit('ready');
    }
  }

  public submit(): void {
    this.emit('submit');
  }

  public reset(): void {
    this.setValue(this.getDefaultValue());
    this.emit('reset', this.getValue());
  }
}

export { ValueContext };
