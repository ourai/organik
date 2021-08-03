import { NumberOrString } from '../../basic';

interface IViewStackComponent {
  readonly activeFlag: NumberOrString;
  readonly viewClassName: string; // Child container's class
}

export { IViewStackComponent };
