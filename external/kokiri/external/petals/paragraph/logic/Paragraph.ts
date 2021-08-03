import { getComponentConfig, BaseHeadlessComponent } from '../../basic';
import { getTypoClassNames } from '../../typography';

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
