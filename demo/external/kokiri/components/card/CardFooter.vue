<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { ICardFooterComponent, CardFooterHeadlessComponent } from '../../external/petals/card';

import { getComponentName, BaseStructuralComponent } from '../basic';
import { Flex } from '../flex';

@Component({
  name: getComponentName('cardFooter'),
})
export default class CardFooter
  extends BaseStructuralComponent<CardFooterHeadlessComponent>
  implements ICardFooterComponent {
  public render(h: CreateElement): VNode {
    return h(
      Flex,
      { class: this.getComponentClassNames(), props: { tag: this.tag } },
      this.$slots.default,
    );
  }

  public created(): void {
    this.setHeadlessComponent(new CardFooterHeadlessComponent(this));
  }
}
</script>

<style lang="scss" src="./style.scss" module></style>
