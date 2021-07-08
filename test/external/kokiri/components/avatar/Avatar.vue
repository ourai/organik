<template>
  <el-avatar
    :class="getComponentClassNames()"
    :src="getSourceUrl()"
    :alt="alt"
    :fit="fit"
    :size="size"
    :shape="shape"
    :icon="icon"
  >
    <slot />
  </el-avatar>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Avatar as ElAvatar } from 'element-ui';

import {
  AvatarShape,
  AvatarSize,
  AvatarFit,
  IAvatarComponent,
  AvatarHeadlessComponent,
} from '@petals/avatar';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('avatar'),
  components: {
    ElAvatar,
  },
})
export default class Avatar
  extends BaseStructuralComponent<AvatarHeadlessComponent>
  implements IAvatarComponent {
  @Prop({ type: String, default: '' })
  public readonly src!: string;

  @Prop({ type: String, default: '' })
  public readonly fallback!: string;

  @Prop({ type: String, default: '' })
  public readonly alt!: string;

  @Prop({ type: String, default: 'cover' })
  public readonly fit!: AvatarFit;

  @Prop({ type: Boolean, default: false })
  public readonly lazy!: boolean;

  @Prop({ type: [String, Number], default: 'medium' })
  public readonly size!: AvatarSize;

  @Prop({ type: String, default: 'circle' })
  public readonly shape!: AvatarShape;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  public created(): void {
    this.setHeadlessComponent(new AvatarHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
