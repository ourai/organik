import { getComponentConfig, BaseHeadlessComponent } from '../../basic';

import { IToolbarComponent } from '../typing';

class ToolbarHeadlessComponent<NodeType = string> extends BaseHeadlessComponent<
  IToolbarComponent<NodeType>
> {
  public getComponentName(): string {
    return getComponentConfig('toolbar', 'name') || 'Toolbar';
  }
}

export { ToolbarHeadlessComponent };
