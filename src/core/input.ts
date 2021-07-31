import { isString, isArray, isPlainObject, clone } from '@ntks/toolbox';

import {
  DataType,
  ValidationResult,
  ValueChecker,
  Validator,
  InputPropValueChecker,
  InputPropChecker,
  InputDescriptor,
} from './typing';
import { getDataType, isDataTypeValid, isDataValueValid } from './data-type';

const propCheckerMap = new Map<DataType, InputPropChecker[]>();

function registerInputPropCheckers(dataType: DataType, checkers: InputPropChecker[]): void {
  propCheckerMap.set(dataType, checkers);
}

function resolveInput(refOrDescriptor: string | InputDescriptor): InputDescriptor {
  return isString(refOrDescriptor)
    ? { name: refOrDescriptor as string }
    : (refOrDescriptor as InputDescriptor);
}

function getDefaultValue({ dataType }: InputDescriptor): any {
  if (!dataType) {
    return '';
  }

  return isDataTypeValid(dataType) ? getDataType(dataType)!.defaultValueGetter() : '';
}

function createValueValidator(valueCheckers: ValueChecker[]): ValueChecker {
  return value => {
    const checkers = ([] as ValueChecker[]).concat(valueCheckers);

    let result = { success: true };

    while (checkers.length > 0) {
      const validate = checkers.shift()!;

      result = validate(value);

      if (!result.success) {
        break;
      }
    }

    return result;
  };
}

function createInputValidator(input: InputDescriptor): Validator {
  const checkers: ValueChecker[] = [];
  const { dataType } = input;

  if (input.required) {
    checkers.push(value => {
      const result: ValidationResult = { success: true };

      if (value == null) {
        result.success = false;
      } else if (isString(value)) {
        result.success = value !== '';
      } else if (isArray(value)) {
        result.success = value.length > 0;
      } else if (isPlainObject(value)) {
        result.success = Object.keys(value).length > 0;
      }

      if (!result.success) {
        result.message = `请填入 '${input.label || input.name}' 的值`;
      }

      return result;
    });
  }

  if (dataType) {
    checkers.push(value => {
      const valid = isDataValueValid(dataType, value);

      return valid
        ? { success: true }
        : {
            success: false,
            message: `'${input.label || input.name}' 的值 ${value} 与数据类型 '${dataType}' 不符`,
          };
    });

    const propCheckers = propCheckerMap.get(dataType);

    if (propCheckers) {
      const checkerMap: Record<string, InputPropValueChecker> = {};

      propCheckers.forEach(({ name, validator }) => {
        checkerMap[name] = validator;

        checkers.push(value => validator(value, input[name], clone(input)));
      });
    }
  }

  return {
    addChecker: checker => checkers.push(checker),
    validate: createValueValidator(checkers),
  };
}

export { registerInputPropCheckers, resolveInput, getDefaultValue, createInputValidator };
