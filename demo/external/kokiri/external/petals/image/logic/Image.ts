import { getComponentConfig, normalizeLooseSize, BaseHeadlessComponent } from '../../basic';

import { IImageComponent } from '../typing';

class ImageHeadlessComponent extends BaseHeadlessComponent<IImageComponent> {
  public getComponentName(): string {
    return getComponentConfig('image', 'name') || 'Image';
  }

  public getClassNames(): string[] {
    const classNames: string[] = [this.getComponentName()];

    if (this.needFit()) {
      const fitType: string = this.sc.fit;
      const fitModifier: string = `fit${fitType.charAt(0).toUpperCase()}${fitType.slice(1)}`;

      classNames.push(this.getModifierClassName(fitModifier));
    }

    return classNames;
  }

  public getWidth(): string {
    return normalizeLooseSize(this.sc.width);
  }

  public getHeight(): string {
    return normalizeLooseSize(this.sc.height);
  }

  public needFit(): boolean {
    return this.sc.fit ? this.sc.fit !== 'none' : false;
  }
}

export { ImageHeadlessComponent };
