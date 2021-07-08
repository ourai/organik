<template>
  <article>
    <heading :level="1">{{ title }}</heading>
    <slot />
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { Heading } from '../../components';

@Component({
  name: 'DemoContainer',
  components: {
    Heading,
  },
})
export default class DemoContainer extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;
}
</script>
