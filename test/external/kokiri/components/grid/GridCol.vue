<template>
  <box :class="getComponentClassNames()" :style="computedStyle">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import { ComponentStyle } from '@petals/basic';
import { GridBreakpointOption, IGridColComponent, GridColHeadlessComponent } from '@petals/grid';

import { isSpecificComponent } from '../../helper/utils';
import { getComponentName, BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: getComponentName('gridCol'),
  components: {
    Box,
  },
})
export default class GridCol
  extends BaseStructuralComponent<GridColHeadlessComponent>
  implements IGridColComponent {
  /**
   * 栅格占位格数
   *
   * 为 `0` 时相当于 `display: none;`
   */
  @Prop({ type: Number, default: -1 })
  public readonly span!: number;

  /**
   * 栅格左侧的间隔格数
   */
  @Prop({ type: Number, default: 0 })
  public readonly offset!: number;

  // /**
  //  * 栅格向左移动格数
  //  */
  // @Prop({ type: Number, default: 0 })
  // public readonly pull!: number;

  // /**
  //  * 栅格向右移动格数
  //  */
  // @Prop({ type: Number, default: 0 })
  // public readonly push!: number;

  /**
   * `<576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly xs!: GridBreakpointOption;

  /**
   * `≥576px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly sm!: GridBreakpointOption;

  /**
   * `≥768px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly md!: GridBreakpointOption;

  /**
   * `≥992px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly lg!: GridBreakpointOption;

  /**
   * `≥1200px` 响应式栅格
   *
   * 可为栅格数或一个包含其他属性的对象
   */
  @Prop({ type: [Number, Object], default: -1 })
  public readonly xl!: GridBreakpointOption;

  private get rowGutter(): number {
    let parent = this.$parent as any;

    while (
      parent &&
      parent.$vnode &&
      !isSpecificComponent(parent.$vnode, getComponentName('gridRow'))
    ) {
      parent = parent.$parent;
    }

    return parent && parent.getHeadlessComponent ? parent.getHeadlessComponent()!.getGutter() : 0;
  }

  private get computedStyle(): ComponentStyle {
    const gutter: number = this.rowGutter;

    if (gutter === 0) {
      return {};
    }

    const gutterSize = `${gutter / 2}px`;

    return { paddingLeft: gutterSize, paddingRight: gutterSize };
  }

  public created(): void {
    this.setHeadlessComponent(new GridColHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
