import { CardBodyStyle } from './aliases';

interface ICardComponent {
  readonly title: string;
  readonly bodyClassName: string;
  readonly bodyStyle: CardBodyStyle;
}

interface ICardHeaderComponent {
  readonly title: string;
  readonly image: string;
}

interface ICardFooterComponent {}

export { ICardComponent, ICardHeaderComponent, ICardFooterComponent };
