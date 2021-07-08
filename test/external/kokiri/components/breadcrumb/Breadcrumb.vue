<template>
  <el-breadcrumb :separator="separator" :separator-class="separatorClassName">
    <slot />
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Breadcrumb as ElBreadcrumb } from 'element-ui';

import { IBreadcrumbComponent, BreadcrumbHeadlessComponent } from '@petals/breadcrumb';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsBreadcrumb',
  components: {
    ElBreadcrumb,
  },
})
export default class Breadcrumb extends BaseStructuralComponent<BreadcrumbHeadlessComponent> implements IBreadcrumbComponent {
  @Prop({ type: String, default: '/' })
  public readonly separator!: string;

  @Prop({ type: String, default: '' })
  public readonly separatorClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new BreadcrumbHeadlessComponent(this));
  }
}
</script>
