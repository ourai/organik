<template>
  <box :class="getClassNames()">
    <slot />
  </box>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListFooterComponent, ListFooterHeadlessComponent } from '@petals/list';

import { BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: 'BudsListFooter',
  components: {
    Box,
  },
})
export default class ListFooter extends BaseStructuralComponent<ListFooterHeadlessComponent> implements IListFooterComponent {
  private getClassNames(): string[] {
    return [
      this.$style[`${BaseStructuralComponent.getComponentClassName('list')}-footer`],
      ...this.getComponentClassNames(),
    ];
  }

  public created(): void {
    this.setHeadlessComponent(new ListFooterHeadlessComponent(this));
  }
}
</script>
