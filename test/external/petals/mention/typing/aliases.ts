import { NumberOrString } from '@petals/basic';

type OptionItem = {
  label: string;
  value: NumberOrString;
}

type Trigger = {
  suggestions?: OptionItem[];
}

type Suggestion = {
  options?: OptionItem[];
  active?: number;
}

type SuggestionItem = string | OptionItem;

type FilterOption = (input: string, option: OptionItem) => boolean;

type ValidateSearch = (text: string, split: string) => boolean;

export { OptionItem, Trigger, Suggestion, SuggestionItem, FilterOption, ValidateSearch };
