import { LinkTarget } from './aliases';

interface ILinkComponent<LinkHref = string> {
  readonly href: LinkHref;
  readonly target: LinkTarget;
}

export { ILinkComponent };
