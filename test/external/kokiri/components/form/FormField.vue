<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { FormFieldLabelOption, IFormFieldComponent, FormFieldHeadlessComponent } from '@petals/form';

import { BaseStructuralComponent } from '../basic';
import { Box } from '../box';
import { GridRow, GridCol } from '../grid';

@Component({
  name: 'BudsFormField',
})
export default class FormField extends BaseStructuralComponent<FormFieldHeadlessComponent> implements IFormFieldComponent {
  @Prop({ type: Object, default: () => ({}) })
  public readonly labelOption!: FormFieldLabelOption;

  @Prop({ type: String, default: '' })
  public readonly label!: string;

  @Prop({ type: String, default: '' })
  public readonly hint!: string;

  @Prop({ type: String, default: '' })
  public readonly separator!: string;

  @Prop({ type: Boolean, default: false })
  public readonly required!: boolean;

  public created(): void {
    this.setHeadlessComponent(new FormFieldHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
