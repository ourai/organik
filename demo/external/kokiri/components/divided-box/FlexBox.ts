import { Component, Prop } from 'vue-property-decorator';

import { HorizontalAlignment, VerticalAlignment, ResizeType } from '../../external/petals/basic';
import { IFlexBoxComponent } from '../../external/petals/divided-box';

import { BaseStructuralComponent } from '../basic';

@Component
export default class FlexBox extends BaseStructuralComponent implements IFlexBoxComponent {
  @Prop({ type: String, default: 'left' })
  public readonly horizontalAlign!: HorizontalAlignment;

  @Prop({ type: String, default: 'top' })
  public readonly verticalAlign!: VerticalAlignment;

  // 居中方式
  @Prop({ type: String, default: 'none' })
  public readonly center!: ResizeType;

  protected resolveFlexBoxClassNames(): string[] {
    return [
      this.resolveHorizontalAlignmentClassName(),
      this.resolveVerticalAlignmentClassName(),
    ].filter(className => !!className);
  }

  private resolveHorizontalAlignmentClassName(): string {
    const centerClassName = 'is-horizontalCenter';

    if (['horizontal', 'both'].includes(this.center)) {
      return this.$style[centerClassName];
    }

    let className!: string;

    switch (this.horizontalAlign) {
      case 'center':
        className = centerClassName;
        break;
      case 'right':
        className = 'is-horizontalRight';
        break;
    }

    return className ? this.$style[className] : '';
  }

  private resolveVerticalAlignmentClassName(): string {
    const middleClassName = 'is-verticalMiddle';

    if (['vertical', 'both'].includes(this.center)) {
      return this.$style[middleClassName];
    }

    let className!: string;

    switch (this.verticalAlign) {
      case 'middle':
        className = middleClassName;
        break;
      case 'bottom':
        className = 'is-verticalBottom';
        break;
    }

    return className ? this.$style[className] : '';
  }
}
