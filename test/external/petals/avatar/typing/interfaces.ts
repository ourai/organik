import { IGraphicComponent } from '@petals/graphic';

import { AvatarShape, AvatarSize } from './aliases';

interface IAvatarComponent extends IGraphicComponent {
  readonly size: AvatarSize;
  readonly shape: AvatarShape;
  readonly icon: string;
}

export { IAvatarComponent };
