import { IMenuComponent, IMenuItemComponent } from '@petals/menu';

import { MenuDirection, SubMenuTrigger } from './aliases';

interface INavMenuComponent extends IMenuComponent {
  readonly direction: MenuDirection;
  readonly subMenuTrigger: SubMenuTrigger;
  readonly collapsed: boolean;
}

interface INavSubMenuComponent extends IMenuItemComponent {
  readonly popupClassName: string;
}

interface INavMenuItemComponent<LinkHref = string> extends IMenuItemComponent {
  readonly href: LinkHref;
}

interface INavMenuItemGroupComponent {
  readonly title: string;
}

export { INavMenuComponent, INavSubMenuComponent, INavMenuItemComponent, INavMenuItemGroupComponent };
