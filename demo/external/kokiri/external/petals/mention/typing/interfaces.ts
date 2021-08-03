import { ITextualFormControl } from '../../form-control';

import { FilterOption, ValidateSearch } from './aliases';

interface IMentionComponent extends ITextualFormControl {
  rows?: number;
  split?: string;
  prefix?: string | string[];
  filter?: FilterOption;
  validate?: ValidateSearch;
}

export { IMentionComponent };
