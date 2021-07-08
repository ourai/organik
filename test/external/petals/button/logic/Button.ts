import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IButtonComponent } from '../typing';

class ButtonHeadlessComponent extends BaseHeadlessComponent<IButtonComponent> {
  public getComponentName(): string {
    return getComponentConfig('button', 'name') || 'Button';
  }

  public getClassNames(): string[] {
    const sc: IButtonComponent = this.sc;

    const classNames: string[] = [
      this.getComponentName(),
      this.getModifierClassName(sc.size),
      this.getModifierClassName(sc.border === 'none' ? 'borderless' : sc.border),
    ];

    if (sc.color) {
      classNames.push(this.getModifierClassName(sc.color));
    }

    if (sc.outlined) {
      classNames.push(this.getModifierClassName('outlined'));
    }

    if (sc.disabled) {
      classNames.push('is-disabled');
    }

    return classNames;
  }
}

export { ButtonHeadlessComponent };
