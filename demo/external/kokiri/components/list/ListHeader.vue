<template>
  <flex :class="getClassNames()" align="center">
    <slot />
  </flex>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListHeaderComponent, ListHeaderHeadlessComponent } from '../../external/petals/list';

import { BaseStructuralComponent } from '../basic';
import { Flex } from '../flex';

@Component({
  name: 'BudsListHeader',
  components: {
    Flex,
  },
})
export default class ListHeader
  extends BaseStructuralComponent<ListHeaderHeadlessComponent>
  implements IListHeaderComponent {
  private getClassNames(): string[] {
    return [
      this.$style[`${BaseStructuralComponent.getComponentClassName('list')}-header`],
      ...this.getComponentClassNames(),
    ];
  }

  public created(): void {
    this.setHeadlessComponent(new ListHeaderHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
