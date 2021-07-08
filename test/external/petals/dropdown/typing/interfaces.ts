import { IMenuComponent, IMenuItemComponent } from '@petals/menu';

import { DropdownMenuTrigger, DropdownMenuPosition } from './aliases';

interface IDropdownComponent {
  readonly trigger: DropdownMenuTrigger;
  readonly position: DropdownMenuPosition;
}

interface IDropdownMenuComponent extends IMenuComponent {}

interface IDropdownMenuItemComponent extends IMenuItemComponent {}

export { IDropdownComponent, IDropdownMenuComponent, IDropdownMenuItemComponent };
