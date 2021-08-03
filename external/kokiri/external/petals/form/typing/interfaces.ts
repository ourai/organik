import { FormFieldLabelOption, FormValidationOption } from './aliases';

interface IFormFieldBasic {
  readonly labelOption: FormFieldLabelOption;
}

interface IFormComponent extends IFormFieldBasic {
  readonly validation: FormValidationOption;
}

interface IFormFieldComponent extends IFormFieldBasic {
  readonly label: string;
  readonly hint: string;
  readonly separator: string;
  readonly required: boolean;
}

interface IFormFieldLabelComponent extends Readonly<Required<FormFieldLabelOption>> {}

interface IFormFieldHintComponent {}

export {
  IFormFieldBasic,
  IFormComponent,
  IFormFieldComponent,
  IFormFieldLabelComponent,
  IFormFieldHintComponent,
};
