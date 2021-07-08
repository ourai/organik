import { IBaseComponent } from '../typing';
import { getDescendantClassName, getModifierClassName } from './helper/utils';

abstract class BaseHeadlessComponent<StructuralComponent = IBaseComponent> {
  /**
   * Instance of structural component
   */
  protected readonly sc: StructuralComponent;

  protected getDescendantOfParent(): string {
    return '';
  }

  constructor(sc: StructuralComponent) {
    this.sc = sc;
  }

  public abstract getComponentName(): string;

  public getParentComponentName(): string {
    return '';
  }

  /**
   * Component's class names which will be scoped
   */
  public getClassNames(): string[] {
    const classNames: string[] = [this.getComponentName()];

    const descendantOfParent: string = this.getDescendantOfParent();
    const parentComponentName: string = this.getParentComponentName();

    if (descendantOfParent && parentComponentName) {
      classNames.push(getDescendantClassName(parentComponentName, descendantOfParent));
    }

    return classNames;
  }

  /**
   * Other class names which won't be scoped
   */
  public getExtraClassNames(): string[] {
    return [];
  }

  public getDescendantClassName(descendant: string): string {
    return getDescendantClassName(this.getComponentName(), descendant);
  }

  public getModifierClassName(modifier: string): string {
    return getModifierClassName(this.getComponentName(), modifier);
  }
}

export { BaseHeadlessComponent };
