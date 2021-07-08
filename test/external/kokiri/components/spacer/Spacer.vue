<template>
  <box :class="getComponentClassNames()" />
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { ISpacerComponent, SpacerHeadlessComponent } from '@petals/spacer';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: getComponentName('spacer'),
  components: {
    Box,
  },
})
export default class Spacer
  extends BaseStructuralComponent<SpacerHeadlessComponent>
  implements ISpacerComponent {
  public created(): void {
    this.setHeadlessComponent(new SpacerHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
