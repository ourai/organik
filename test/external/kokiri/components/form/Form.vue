<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { FormFieldLabelOption, FormValidationOption, IFormComponent, FormHeadlessComponent } from '@petals/form';

import { ComponentTag, BaseStructuralComponent } from '../basic';
import { Box } from '../box';

@Component({
  name: 'BudsForm',
  components: {
    Box,
  },
})
export default class Form extends BaseStructuralComponent<FormHeadlessComponent> implements IFormComponent {
  @Prop({ type: [String, Function], default: 'form' })
  public readonly tag!: ComponentTag;

  @Prop({ type: Object, default: () => ({}) })
  public readonly labelOption!: FormFieldLabelOption;

  @Prop({ type: Object, default: () => ({}) })
  public readonly validation!: FormValidationOption;

  public render(h: CreateElement): VNode {
    return h(this.tag, { class: this.getComponentClassNames() }, this.$slots.default);
  }

  public created(): void {
    this.setHeadlessComponent(new FormHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
