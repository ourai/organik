<template>
  <el-badge :class="$style.Badge" :value="count" :max="max" :is-dot="dot">
    <slot />
  </el-badge>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Badge as ElBadge } from 'element-ui';

@Component({
  components: {
    ElBadge,
  },
})
export default class LegacyBadge extends Vue {
  @Prop({ type: [String, Number], default: '' })
  readonly count!: string | number;

  @Prop({ type: Number, default: 99 })
  readonly max!: number;

  @Prop({ type: Boolean, default: false })
  readonly dot!: boolean;
}
</script>
