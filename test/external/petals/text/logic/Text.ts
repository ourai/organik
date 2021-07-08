import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';
import { getTypoClassNames } from '@petals/typography';

import { ITextComponent } from '../typing';

class TextHeadlessComponent extends BaseHeadlessComponent<ITextComponent> {
  public getComponentName(): string {
    return getComponentConfig('text', 'name') || 'Text';
  }

  public getClassNames(): string[] {
    const componentName: string = this.getComponentName();

    return [componentName, ...getTypoClassNames<ITextComponent>(this.sc, componentName)];
  }
}

export { TextHeadlessComponent };
