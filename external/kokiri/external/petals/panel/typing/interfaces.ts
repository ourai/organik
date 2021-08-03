import { PanelBodyStyle } from './aliases';

interface IPanelComponent {
  readonly title: string;
  readonly fixed: boolean;
  readonly bodyClassName: string;
  readonly bodyStyle: PanelBodyStyle;
}

interface IPanelHeaderComponent {
  readonly title: string;
}

export { IPanelComponent, IPanelHeaderComponent };
