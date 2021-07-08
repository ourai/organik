interface IBreadcrumbComponent {
  readonly separator: string;
  readonly separatorClassName: string;
}

interface IBreadcrumbItemComponent<LinkHref = string> {
  readonly href: LinkHref;
}

export { IBreadcrumbComponent, IBreadcrumbItemComponent };
