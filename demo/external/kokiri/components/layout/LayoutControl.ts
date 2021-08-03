import { Vue, Component } from 'vue-property-decorator';

import { BaseHeadlessComponent } from '../../external/petals/basic';
import { LayoutRole, ILayoutContainerComponent } from '../../external/petals/layout';

import { findSpecificAncestor } from '../../helper/utils';
import { getComponentName, BaseStructuralComponent } from '../basic';

type SelfContainer = ILayoutContainerComponent &
  Vue & {
    __registerRole: (role: LayoutRole, $role: Vue) => void;
    __removeRole: (role: LayoutRole) => void;
  };

@Component
class LayoutControl<
  HeadlessComponent = BaseHeadlessComponent
> extends BaseStructuralComponent<HeadlessComponent> {
  protected role!: LayoutRole;

  protected container!: SelfContainer | null;

  public mounted(): void {
    const ancestor: Vue | null = findSpecificAncestor(this, getComponentName('layoutContainer'));
    const container: SelfContainer | null = ancestor ? (ancestor as SelfContainer) : null;

    if (container) {
      container.__registerRole(this.role, this);
    }

    this.container = container;
  }

  public destroyed(): void {
    if (this.container) {
      this.container.__removeRole(this.role);
    }
  }
}

export { LayoutControl };
