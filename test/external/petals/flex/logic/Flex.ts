import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IFlexComponent } from '../typing';

class FlexHeadlessComponent extends BaseHeadlessComponent<IFlexComponent> {
  public getComponentName(): string {
    return getComponentConfig('flex', 'name') || 'Flex';
  }

  public getClassNames(): string[] {
    const sc: IFlexComponent = this.sc;
    const classNames: string[] = [
      this.getComponentName(),
      this.getModifierClassName(sc.direction === 'vertical' ? 'vertical' : 'horizontal'),
    ];

    if (sc.reverse) {
      classNames.push(this.getModifierClassName('reverse'));
    }

    switch (sc.align) {
      case 'center':
        classNames.push(this.getModifierClassName('alignCenter'));
        break;
      case 'end':
        classNames.push(this.getModifierClassName('alignEnd'));
        break;
      default:
        classNames.push(this.getModifierClassName('alignStart'));
    }

    switch (sc.justify) {
      case 'center':
        classNames.push(this.getModifierClassName('justifyCenter'));
        break;
      case 'end':
        classNames.push(this.getModifierClassName('justifyEnd'));
        break;
      default:
        classNames.push(this.getModifierClassName('justifyStart'));
    }

    return classNames;
  }
}

export { FlexHeadlessComponent };
