<template>
  <component :is="badgeComponent" :count="count" :max="max" :dot="dot" :text="text" :status="status" :color="color">
    <slot />
  </component>
</template>

<script lang="ts">
import { VueConstructor } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ProcessStatus } from '@petals/basic';

import SsBadge from './SsBadge.vue';
import LegacyBadge from './LegacyBadge.vue';

@Component({
  components: {
    LegacyBadge,
    SsBadge,
  },
})
export default class Badge extends Vue {
  @Prop({ type: [String, Number], default: '' })
  readonly count!: string | number;

  @Prop()
  readonly text!: string;

  @Prop()
  readonly status!: ProcessStatus;

  @Prop({ default: 99 })
  readonly max!: number;

  @Prop({ default: false })
  readonly dot!: boolean;

  @Prop()
  readonly color!: string;

  /**
   * FIXME:
   * 带状态的用自写的，
   * 无状态的用 Element 的，
   * 临时方案
   */
  public get badgeComponent(): VueConstructor {
    const { text, status, color } = this;

    return text || status || color ? SsBadge : LegacyBadge;
  }
}
</script>
