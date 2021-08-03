import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IGridRowComponent } from '../typing';

class GridRowHeadlessComponent extends BaseHeadlessComponent<IGridRowComponent> {
  public getComponentName(): string {
    return getComponentConfig('gridRow', 'name') || 'GridRow';
  }

  public getGutter(): number {
    const { gutter } = this.sc;

    return typeof gutter === 'number' && gutter > 0 ? gutter : 0;
  }
}

export { GridRowHeadlessComponent };
