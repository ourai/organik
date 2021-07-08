import { ButtonProps } from './aliases';

interface IButtonComponent extends Omit<Readonly<Required<ButtonProps>>, 'text'> {}

export { IButtonComponent };
