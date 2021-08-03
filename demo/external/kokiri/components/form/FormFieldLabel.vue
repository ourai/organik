<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import {
  FormFieldLabelWidth,
  FormFieldLabelPosition,
  IFormFieldLabelComponent,
  FormFieldLabelHeadlessComponent,
} from '../../external/petals/form';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsFormFieldLabel',
})
export default class FormFieldLabel
  extends BaseStructuralComponent<FormFieldLabelHeadlessComponent>
  implements IFormFieldLabelComponent {
  @Prop({ type: [Number, String], default: 'none' })
  public readonly width!: FormFieldLabelWidth;

  @Prop({ type: String, default: 'left' })
  public readonly position!: FormFieldLabelPosition;

  public created(): void {
    this.setHeadlessComponent(new FormFieldLabelHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
