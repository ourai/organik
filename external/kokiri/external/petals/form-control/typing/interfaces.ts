import { FormControlSize, DateFormControlValue, FileFormControlValue } from './aliases';

interface IFormControl<ValueType> {
  readonly name: string;
  readonly value: ValueType;
  readonly disabled: boolean;
  readonly readonly: boolean;
}

interface INumericFormControl<ValueType = number> extends IFormControl<ValueType> {
  readonly min: number;
  readonly max: number;
  readonly step: number;
}

interface IFileFormControl<ValueType = FileFormControlValue> extends IFormControl<ValueType> {
  readonly accept: string;
  readonly multiple: boolean;
}

interface IInputtableFormControl<ValueType> extends IFormControl<ValueType> {
  readonly placeholder: string;
  readonly clearable: boolean;
  readonly size: FormControlSize;
}

interface ITextualFormControl extends IInputtableFormControl<string> {
  readonly minLength: number;
  readonly maxLength: number;
}

interface IDateFormControl<ValueType = DateFormControlValue> extends IInputtableFormControl<ValueType> {
  readonly format: string;
}

export {
  IFormControl,
  INumericFormControl,
  IFileFormControl,
  IInputtableFormControl,
  ITextualFormControl,
  IDateFormControl,
};
