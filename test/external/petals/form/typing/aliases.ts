import { LooseSize } from '@petals/basic';

type GridType = 'grid' | 'flex';

type FormLayoutType = GridType | 'vertical' | 'inline';

type FormFieldLabelWidth = LooseSize;

type FormFieldLabelPosition = 'left' | 'top';

type FormFieldLabelOption = {
  width?: FormFieldLabelWidth;
  position?: FormFieldLabelPosition;
};

type FormFieldValidationOption = {
  required?: boolean;
};

type FormValidationOption = { [formFieldName: string]: FormFieldValidationOption };

export {
  GridType,
  FormLayoutType,
  FormFieldLabelWidth,
  FormFieldLabelPosition,
  FormFieldLabelOption,
  FormValidationOption,
};
