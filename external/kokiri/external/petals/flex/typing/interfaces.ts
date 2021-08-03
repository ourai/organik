import { FlexDirection, FlexAlignment } from './aliases';

interface IFlexComponent {
  readonly direction: FlexDirection;
  readonly align: FlexAlignment;
  readonly justify: FlexAlignment;
  readonly reverse: boolean;
}

export { IFlexComponent };
