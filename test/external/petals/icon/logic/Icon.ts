import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IconOption, IIconComponent } from '../typing';
import { getIconProvider, getDefaultIconProvider } from './utils';

class IconHeadlessComponent extends BaseHeadlessComponent<IIconComponent> {
  public getComponentName(): string {
    return getComponentConfig('icon', 'name') || 'Icon';
  }

  public getOption(): IconOption {
    const splitRefs: string[] = this.sc.refs.split(':');
    const iconRef: string = splitRefs.pop()!;
    const providerAlias: string = splitRefs[0] || getDefaultIconProvider()!;
    const { type, resolve } = getIconProvider(providerAlias)!;

    return { provider: providerAlias, ref: iconRef, type, resolve };
  }

  public getClassNames(): string[] {
    return [...super.getClassNames(), this.getModifierClassName(this.getOption().type)];
  }

  public getExtraClassNames(): string[] {
    const { ref, type, resolve } = this.getOption();

    let classNames: string[] = [];

    if (type === 'font' && typeof resolve === 'function') {
      const resolved: string | string[] = resolve(ref);

      if (typeof resolved === 'string' || Array.isArray(resolved)) {
        classNames = ([] as string[]).concat(resolved);
      }
    }

    return classNames;
  }

  public getSvgIconRef(): string {
    const { ref, type, resolve } = this.getOption();

    return type === 'svg' && typeof resolve === 'function' ? (resolve(ref) as string) : '';
  }
}

export { IconHeadlessComponent };
