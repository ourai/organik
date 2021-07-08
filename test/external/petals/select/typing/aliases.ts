import { NumberOrString } from '@petals/basic';

type OptionValueType = NumberOrString;

type SelectValueType = OptionValueType | OptionValueType[];

export { OptionValueType, SelectValueType };
