import { ITypographyComponent } from '../../typography';

import { HeadingLevel } from './aliases';

interface IHeadingComponent extends Omit<ITypographyComponent, 'bold'> {
  readonly level: HeadingLevel;
}

export { IHeadingComponent };
