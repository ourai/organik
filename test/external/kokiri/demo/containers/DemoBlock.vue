<template>
  <panel class="DemoBlock" :title="title">
    <slot />
  </panel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { Panel } from '../../components';

@Component({
  name: 'DemoBlock',
  components: {
    Panel,
  },
})
export default class DemoBlock extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;
}
</script>

<style lang="scss" scoped>
.DemoBlock {
  & + & {
    margin-top: 16px;
  }
}
</style>
