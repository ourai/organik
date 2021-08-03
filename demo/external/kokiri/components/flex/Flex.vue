<template>
  <div :class="getComponentClassNames()">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  FlexDirection,
  FlexAlignment,
  IFlexComponent,
  FlexHeadlessComponent,
} from '../../external/petals/flex';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('flex'),
})
export default class Flex
  extends BaseStructuralComponent<FlexHeadlessComponent>
  implements IFlexComponent {
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: FlexDirection;

  @Prop({ type: String, default: 'start' })
  public readonly align!: FlexAlignment;

  @Prop({ type: String, default: 'start' })
  public readonly justify!: FlexAlignment;

  @Prop({ type: Boolean, default: false })
  public readonly reverse!: boolean;

  public created(): void {
    this.setHeadlessComponent(new FlexHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
