import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';
import { getTypoClassNames } from '@petals/typography';

import { IHeadingComponent } from '../typing';

class HeadingHeadlessComponent extends BaseHeadlessComponent<IHeadingComponent> {
  public getComponentName(): string {
    return getComponentConfig('heading', 'name') || 'Heading';
  }

  public getClassNames(): string[] {
    const componentName: string = this.getComponentName();

    return [
      componentName,
      this.getModifierClassName(`level${this.sc.level}`),
      ...getTypoClassNames<IHeadingComponent>(this.sc, componentName, true),
    ];
  }
}

export { HeadingHeadlessComponent };
