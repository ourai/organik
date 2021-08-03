import { NumberOrString } from '../../basic';

type OptionValueType = NumberOrString;

type SelectValueType = OptionValueType | OptionValueType[];

export { OptionValueType, SelectValueType };
