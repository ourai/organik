import { NumberOrString, ProcessStatus, ColorType } from '../../basic';

interface IBadgeComponent {
  count: NumberOrString;
  text: string;
  status: ProcessStatus;
  max: number;
  dot: boolean;
  color: ColorType;
}

export { IBadgeComponent };
