interface IMenuComponent {}

interface IMenuItemComponent {
  readonly flag: string;
  readonly title: string;
  readonly icon: string;
  readonly disabled: boolean;
}

export { IMenuComponent, IMenuItemComponent };
