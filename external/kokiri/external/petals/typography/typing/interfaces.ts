import { TypoLinePosition, TypoTextColor } from './aliases';

interface ITypographyComponent {
  readonly line: TypoLinePosition;
  readonly color: TypoTextColor;
  readonly bold: boolean;
}

export { ITypographyComponent };
