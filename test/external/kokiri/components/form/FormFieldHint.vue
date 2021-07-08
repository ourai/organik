<script lang="ts">
import { Component } from 'vue-property-decorator';

import { IFormFieldHintComponent, FormFieldHintHeadlessComponent } from '@petals/form';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsFormFieldHint',
})
export default class FormFieldHint extends BaseStructuralComponent<FormFieldHintHeadlessComponent> implements IFormFieldHintComponent {
  public created(): void {
    this.setHeadlessComponent(new FormFieldHintHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
