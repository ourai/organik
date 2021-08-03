<template>
  <main :class="getComponentClassNames()">
    <slot />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import {
  LayoutRole,
  ILayoutMainComponent,
  LayoutMainHeadlessComponent,
} from '../../external/petals/layout';

import { getComponentName } from '../basic';
import { LayoutControl } from './LayoutControl';

@Component({
  name: getComponentName('layoutMain'),
})
export default class LayoutMain
  extends LayoutControl<LayoutMainHeadlessComponent>
  implements ILayoutMainComponent {
  protected role: LayoutRole = 'main';

  public created(): void {
    this.setHeadlessComponent(new LayoutMainHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
