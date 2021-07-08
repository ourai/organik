import { LooseSize } from '@petals/basic';

interface ILayoutContainerComponent {}

interface ILayoutMainComponent {}

interface ILayoutAsideComponent {
  readonly width: LooseSize;
}

interface ILayoutHeaderComponent {
  readonly height: LooseSize;
}

interface ILayoutFooterComponent {
  readonly height: LooseSize;
}

export {
  ILayoutContainerComponent,
  ILayoutMainComponent,
  ILayoutAsideComponent,
  ILayoutHeaderComponent,
  ILayoutFooterComponent,
};
