<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';

import { DirectionType, AdjustmentType } from '@petals/basic';
import { IDividedBoxComponent } from '@petals/divided-box';

import { Box } from '../box';
import FlexBox from './FlexBox';

@Component({
  name: 'BudsDividedBox',
  components: {
    Box,
  },
})
export default class DividedBox extends FlexBox implements IDividedBoxComponent {
  @Prop({ type: String, default: 'vertical' })
  public readonly direction!: DirectionType;

  /**
   * 宽度/高度适配方式
   *
   * 可选值为 `'average'` 和 `'auto'`
   * `HDividedBox` 默认为 `'average'`，`VDividedBox` 默认为 `'auto'`
   */
  @Prop({ type: String })
  public readonly adjust!: AdjustmentType;

  @Provide('__buds-parentDividedBox')
  private readonly parentDividedBox: any = {};

  private get defaultAdjustment(): string {
    return this.direction === 'horizontal' ? 'average' : 'auto';
  }

  private resolveClassNames(): string[] {
    const adjustment = ['average', 'auto'].some(a => this.adjust === a) ? this.adjust! : this.defaultAdjustment;

    this.parentDividedBox.adjustment = adjustment;

    return [
      this.direction === 'horizontal' ? this.$style.HDividedBox : this.$style.VDividedBox,
      adjustment === 'average' ? this.$style['is-average'] : this.$style['is-auto'],
    ].concat(this.resolveFlexBoxClassNames());
  }

  public created(): void {
    this.parentDividedBox.direction = this.direction;
  }

  public render(h: CreateElement): VNode {
    return h(
      'box',
      {
        class: this.resolveClassNames(),
      },
      this.$slots.default,
    );
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
