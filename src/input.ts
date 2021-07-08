import { InputDescriptor } from './typing';
import { getDataType, isDataTypeValid, isDataValueValid } from './data-type';

function getDefaultValue({ dataType }: InputDescriptor): any {
  if (!dataType) {
    return '';
  }

  return isDataTypeValid(dataType) ? getDataType(dataType)!.defaultValueGetter() : '';
}

function createValueChecker<VT>(
  inputMap: Record<string, InputDescriptor>,
  callback: (name: string, value: VT) => void,
): (name: string, value: VT) => void {
  return (name: string, value: VT) => {
    if (inputMap[name] === undefined || !isDataValueValid(inputMap[name].dataType!, value)) {
      return;
    }

    callback(name, value);
  };
}

export { getDefaultValue, createValueChecker };
