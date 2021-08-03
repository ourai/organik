import { DrawerPosition, DrawerSize } from './aliases';

interface IDrawerComponent {
  readonly title: string;
  readonly position: DrawerPosition;
  readonly size: DrawerSize;
  readonly visible: boolean;
}

export { IDrawerComponent };
