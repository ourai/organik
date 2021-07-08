import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';
import { getTypoClassNames } from '@petals/typography';

import { IParagraphComponent } from '../typing';

class ParagraphHeadlessComponent extends BaseHeadlessComponent<IParagraphComponent> {
  public getComponentName(): string {
    return getComponentConfig('paragraph', 'name') || 'Paragraph';
  }

  public getClassNames(): string[] {
    const componentName: string = this.getComponentName();

    return [componentName, ...getTypoClassNames<IParagraphComponent>(this.sc, componentName)];
  }
}

export { ParagraphHeadlessComponent };
