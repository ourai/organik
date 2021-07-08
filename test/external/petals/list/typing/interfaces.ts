import { ComponentStyle } from '@petals/basic';

interface IListComponent {
  readonly title: string;
  readonly bordered: boolean;
  readonly divided: boolean;
  readonly bodyClassName: string;
  readonly bodyStyle: ComponentStyle;
}

interface IListItemComponent {}

interface IListHeaderComponent {}

interface IListFooterComponent {}

export { IListComponent, IListItemComponent, IListHeaderComponent, IListFooterComponent };
