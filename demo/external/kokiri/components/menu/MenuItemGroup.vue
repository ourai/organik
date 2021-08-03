<script lang="ts">
import { VNode, CreateElement } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { MenuItemGroup as ElMenuItemGroup } from 'element-ui';

import {
  INavMenuItemGroupComponent,
  NavMenuItemGroupHeadlessComponent,
} from '../../external/petals/nav-menu';

import { BaseStructuralComponent } from '../basic';

@Component({
  name: 'BudsMenuItemGroup',
})
export default class MenuItemGroup
  extends BaseStructuralComponent<NavMenuItemGroupHeadlessComponent>
  implements INavMenuItemGroupComponent {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  public render(h: CreateElement): VNode {
    return h(
      ElMenuItemGroup,
      {
        props: {
          title: this.title,
        },
      },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new NavMenuItemGroupHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
