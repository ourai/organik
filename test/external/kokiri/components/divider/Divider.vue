<template>
  <el-divider
    :class="getComponentClassNames()"
    :direction="direction"
    :content-position="alignment"
  >
    <slot />
  </el-divider>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Divider as ElDivider } from 'element-ui';

import { DirectionType, HorizontalAlignment } from '@petals/basic';
import { IDividerComponent, DividerHeadlessComponent } from '@petals/divider';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('divider'),
  components: {
    ElDivider,
  },
})
export default class Divider
  extends BaseStructuralComponent<DividerHeadlessComponent>
  implements IDividerComponent {
  /**
   * 分割线方向
   */
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: DirectionType;

  /**
   * 分割线文案位置
   */
  @Prop({ type: String, default: 'center' })
  public readonly alignment!: HorizontalAlignment;

  public created(): void {
    this.setHeadlessComponent(new DividerHeadlessComponent(this));
  }
}
</script>
