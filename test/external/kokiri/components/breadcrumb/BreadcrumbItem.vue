<template>
  <el-breadcrumb-item :to="href">
    <slot />
  </el-breadcrumb-item>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { BreadcrumbItem as ElBreadcrumbItem } from 'element-ui';

import { IBreadcrumbItemComponent, BreadcrumbItemHeadlessComponent } from '@petals/breadcrumb';

import { BaseStructuralComponent } from '../basic';

type LinkHref = string;

@Component({
  name: 'BudsBreadcrumbItem',
  components: {
    ElBreadcrumbItem,
  },
})
export default class BreadcrumbItem extends BaseStructuralComponent<BreadcrumbItemHeadlessComponent> implements IBreadcrumbItemComponent<LinkHref> {
  @Prop({ type: String, default: '' })
  public readonly href!: LinkHref;
}
</script>
