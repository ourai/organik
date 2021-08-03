import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IAvatarComponent } from '../typing';

class AvatarHeadlessComponent extends BaseHeadlessComponent<IAvatarComponent> {
  public getComponentName(): string {
    return getComponentConfig('avatar', 'name') || 'Avatar';
  }

  public getSourceUrl(): string {
    return this.sc.src || this.sc.fallback;
  }

  public getClassNames(): string[] {
    const classNames: string[] = [this.getComponentName()];

    if (this.getSourceUrl() !== '') {
      classNames.push(this.getModifierClassName('image'));
    }

    return classNames;
  }
}

export { AvatarHeadlessComponent };
