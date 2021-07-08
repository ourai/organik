import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { IGridColComponent } from '../typing';

class GridColHeadlessComponent extends BaseHeadlessComponent<IGridColComponent> {
  private getResponsiveClassName(span: number, breakpoint = ''): string {
    if (span === -1) {
      return '';
    }

    const breakpointPart: string = breakpoint ? `${breakpoint}-` : '';

    return this.getModifierClassName(
      span === 0 ? `${breakpointPart}hidden` : `${breakpointPart}${span}`,
    );
  }

  public getComponentName(): string {
    return getComponentConfig('gridCol', 'name') || 'GridCol';
  }

  public getClassNames(): string[] {
    const sc: IGridColComponent = this.sc;
    const classNames: string[] = [this.getComponentName()];
    const spanClassName: string = this.getResponsiveClassName(sc.span);

    if (spanClassName !== '') {
      classNames.push(spanClassName);
    }

    if (sc.offset > 0) {
      classNames.push(this.getModifierClassName(`offset-${sc.offset}`));
    }

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(bp => {
      const cls: string = this.getResponsiveClassName(sc[bp], bp);

      if (cls !== '') {
        classNames.push(cls);
      }
    });

    return classNames;
  }
}

export { GridColHeadlessComponent };
