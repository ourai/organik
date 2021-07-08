<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IBoxComponent, BoxHeadlessComponent } from '@petals/box';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  name: getComponentName('box'),
})
export default class Box
  extends BaseStructuralComponent<BoxHeadlessComponent>
  implements IBoxComponent {
  public created(): void {
    this.setHeadlessComponent(new BoxHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
