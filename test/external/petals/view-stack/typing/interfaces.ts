import { NumberOrString } from '@petals/basic';

interface IViewStackComponent {
  readonly activeFlag: NumberOrString;
  readonly viewClassName: string; // Child container's class
}

export { IViewStackComponent };
