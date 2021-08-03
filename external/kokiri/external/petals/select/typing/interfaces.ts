import { IInputtableFormControl } from '../../form-control';

import { OptionValueType, SelectValueType } from './aliases';

interface ISelectComponent extends IInputtableFormControl<SelectValueType> {
  readonly multiple: boolean;
}

interface ISelectOptionComponent {
  readonly value: OptionValueType;
  readonly label: string;
  readonly disabled: boolean;
}

interface ISelectOptionGroupComponent {
  readonly label: string; // 组名
  readonly disabled: boolean; // 是否将该分组下所有选项置为禁用
}

export { ISelectComponent, ISelectOptionComponent, ISelectOptionGroupComponent };
