<script lang="ts">
import { VNode, CreateElement } from 'vue';
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { Menu as ElMenu } from 'element-ui';
import { MenuDisplayMode } from 'element-ui/types/menu';

import {
  MenuDirection,
  SubMenuTrigger,
  INavMenuComponent,
  NavMenuHeadlessComponent,
} from '../../external/petals/nav-menu';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsMenu',
})
export default class Menu
  extends BaseStructuralComponent<NavMenuHeadlessComponent>
  implements INavMenuComponent {
  @Prop({ type: String, default: 'vertical' })
  public readonly direction!: MenuDirection;

  @Prop({ type: String, default: 'hover' })
  public readonly subMenuTrigger!: SubMenuTrigger;

  @Prop({ type: Boolean, default: false })
  public readonly collapsed!: boolean;

  private menuMode!: MenuDisplayMode;

  private isCollapsed!: boolean;

  private updateCollapsed(): void {
    this.isCollapsed = this.menuMode === 'vertical' ? this.collapsed : false;
  }

  @Watch('direction', { immediate: true })
  private handleModeChange(val: MenuDirection): void {
    this.menuMode = val === 'horizontal' ? 'horizontal' : 'vertical';

    this.updateCollapsed();
  }

  @Watch('collapsed')
  private handleCollapsedChange(val: boolean): void {
    this.updateCollapsed();
  }

  @Emit('select')
  private handleMenuItemSelect(): void {}

  @Emit('open')
  private handleMenuItemOpen(): void {}

  @Emit('close')
  private handleMenuItemClose(): void {}

  public render(h: CreateElement): VNode {
    return h(
      ElMenu,
      {
        props: {
          mode: this.menuMode,
          collapse: this.isCollapsed,
          collapseTransition: false,
        },
        on: {
          select: this.handleMenuItemSelect,
          open: this.handleMenuItemOpen,
          close: this.handleMenuItemClose,
        },
      },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new NavMenuHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
