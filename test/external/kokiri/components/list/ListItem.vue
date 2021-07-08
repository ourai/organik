<template>
  <li :class="getClassNames()">
    <slot />
  </li>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IListItemComponent, ListItemHeadlessComponent } from '@petals/list';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsListItem',
})
export default class ListItem extends BaseStructuralComponent<ListItemHeadlessComponent> implements IListItemComponent {
  private getClassNames(): string[] {
    return [
      this.$style[`${BaseStructuralComponent.getComponentClassName('list')}-item`],
      ...this.getComponentClassNames(),
    ];
  }

  public created(): void {
    this.setHeadlessComponent(new ListItemHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
