import { Vue, Component, Prop } from 'vue-property-decorator';

import {
  IBaseComponent,
  getComponentConfig,
  getDescendantClassName,
  BaseHeadlessComponent,
} from '@petals/basic';

import { ComponentTag } from './typing';

@Component
class BaseStructuralComponent<HeadlessComponent = BaseHeadlessComponent>
  extends Vue
  implements IBaseComponent<ComponentTag> {
  @Prop({ type: [String, Function], default: '' })
  public readonly tag!: ComponentTag;

  private __hc!: HeadlessComponent;

  protected setHeadlessComponent(hc: HeadlessComponent): void {
    this.__hc = hc;
  }

  protected getHeadlessComponent(): HeadlessComponent | null {
    return this.__hc || null;
  }

  protected getComponentClassNames(): string[] {
    return (this.__hc as any).getClassNames().map((cls: string) => this.$style[cls]);
  }

  protected getExtraClassNames(): string[] {
    return (this.__hc as any).getExtraClassNames();
  }

  protected getDescendantClassName(descendant: string): string {
    return this.$style[(this.__hc as any).getDescendantClassName(descendant)];
  }

  protected getModifierClassName(modifier: string): string {
    return this.$style[(this.__hc as any).getModifierClassName(modifier)];
  }

  protected getParentDescendantClassName(descendant: string): string {
    const parentComponentName: string = (this.__hc as any).getParentComponentName();

    return parentComponentName
      ? this.$style[getDescendantClassName(parentComponentName, descendant)]
      : '';
  }

  public static getComponentClassName(moduleName: string): string {
    return getComponentConfig(moduleName, 'name') || '';
  }
}

export { BaseStructuralComponent };
