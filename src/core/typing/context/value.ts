import { DataValue } from '../value';
import { EventEmitter } from '../event';

interface ValueContextDescriptor<ValueType extends DataValue = DataValue> {
  defaultValue: ValueType;
  initialValue?: ValueType;
}

type ValueEvents = 'ready' | 'change' | 'submit' | 'reset';

interface ValueContext<
  ValueType extends DataValue = DataValue,
  EventNames extends string = ValueEvents
> extends EventEmitter<EventNames> {
  getDefaultValue: () => ValueType;
  getValue: () => ValueType;
  setValue: (value: ValueType) => void;
  submit: () => void;
  reset: () => void;
}

export { ValueContextDescriptor, ValueEvents, ValueContext };
