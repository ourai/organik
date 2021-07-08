<template>
  <text :class="[$style.Badge, $style['Badge--status']]">
    <text :class="componentClassNames" :style="computedStyle" />
    <text :class="$style['Badge-text']">{{ text }}</text>
  </text>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ProcessStatus } from '@petals/basic';
import { Text } from '../text';

@Component({
  components: {
    Text,
  },
})
export default class SsBadge extends Vue {
  @Prop()
  readonly text!: string;

  @Prop()
  readonly status!: ProcessStatus;

  @Prop()
  readonly color!: string;

  get componentClassNames() {
    const { status, color } = this;

    return {
      [this.$style['Badge-dot']]: true,
      [this.$style[`Badge-dot--${this.status}`]]: status && !color,
    };
  }

  get computedStyle() {
    const { color } = this;

    if (color) {
      return {
        backgroundColor: color,
      };
    }

    return null;
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
