import { SizeType } from '../../basic';

type ButtonSize = SizeType;

type ButtonBorder = 'solid' | 'dashed' | 'none';

type ButtonColor = 'primary' | 'danger' | string;

type ButtonProps = {
  text: string;
  size?: ButtonSize;
  border?: ButtonBorder;
  color?: ButtonColor;
  outlined?: boolean;
  disabled?: boolean;
};

export { ButtonSize, ButtonBorder, ButtonColor, ButtonProps };
