import { isNumber } from '@ntks/toolbox';
import { DataType, InputDescriptor, InputPropChecker, registerInputPropCheckers } from 'organik';

function getDisplayText(input: InputDescriptor): string {
  return input.label || input.name;
}

function numberMaxValueChecker(inputValue, propValue, input) {
  return isNumber(propValue) && inputValue > propValue
    ? {
        success: false,
        message: `'${getDisplayText(input)}' 的值不能大于 ${propValue}`,
      }
    : { success: true };
}

function numberMinValueChecker(inputValue, propValue, input) {
  return isNumber(propValue) && inputValue < propValue
    ? {
        success: false,
        message: `'${getDisplayText(input)}' 的值不能小于 ${propValue}`,
      }
    : { success: true };
}

function stringMaxLengthChecker(inputValue, propValue, input) {
  return isNumber(propValue) && inputValue.length > propValue
    ? {
        success: false,
        message: `'${getDisplayText(input)}' 的长度不能超过 ${propValue} 个字符`,
      }
    : { success: true };
}

function stringMinLengthChecker(inputValue, propValue, input) {
  return isNumber(propValue) && inputValue.length < propValue
    ? {
        success: false,
        message: `'${getDisplayText(input)}' 的长度不能少于 ${propValue} 个字符`,
      }
    : { success: true };
}

([
  {
    dataType: 'int',
    props: [
      { name: 'max', validator: numberMaxValueChecker },
      { name: 'min', validator: numberMinValueChecker },
    ],
  },
  {
    dataType: 'float',
    props: [
      { name: 'max', validator: numberMaxValueChecker },
      { name: 'min', validator: numberMinValueChecker },
    ],
  },
  {
    dataType: 'string',
    props: [
      { name: 'max', validator: stringMaxLengthChecker },
      { name: 'min', validator: stringMinLengthChecker },
    ],
  },
  {
    dataType: 'text',
    props: [
      { name: 'max', validator: stringMaxLengthChecker },
      { name: 'min', validator: stringMinLengthChecker },
    ],
  },
] as { dataType: DataType; props: InputPropChecker[] }[]).forEach(({ dataType, props }) =>
  registerInputPropCheckers(dataType, props),
);
