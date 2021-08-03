<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { NumberOrString } from '../../external/petals/basic';
import { IViewStackComponent, ViewStackHeadlessComponent } from '../../external/petals/view-stack';

import { getComponentName, BaseStructuralComponent } from '../basic';

type ViewNodeProps = {
  tag?: string;
  classNames?: string[];
};

@Component({
  name: getComponentName('viewStack'),
})
export default class ViewStack
  extends BaseStructuralComponent<ViewStackHeadlessComponent>
  implements IViewStackComponent {
  @Prop({ type: [String, Number], default: 0 })
  public readonly activeFlag!: NumberOrString;

  @Prop({ type: String, default: '' })
  public readonly viewClassName!: string;

  private generateVirtualNode(
    h: CreateElement,
    children: VNode[],
    opts: ViewNodeProps = {},
  ): VNode {
    return h(opts.tag || 'div', opts.classNames ? { class: opts.classNames } : {}, children);
  }

  private getViewClassNames(active: boolean): string[] {
    const classNames: string[] = [this.getDescendantClassName('view')];

    if (active) {
      classNames.push(this.$style['is-active']);
    }

    if (this.viewClassName) {
      classNames.push(this.viewClassName);
    }

    return classNames;
  }

  public render(h: CreateElement): VNode {
    const vnodes = (this.$slots.default || []).filter(({ tag }) => !!tag);

    let activeIndex = Number(this.activeFlag);

    if (isNaN(activeIndex) || vnodes[activeIndex] === undefined) {
      activeIndex = 0;
    }

    return this.generateVirtualNode(
      h,
      vnodes.map((vn: VNode, idx: number) =>
        this.generateVirtualNode(h, [vn], {
          classNames: this.getViewClassNames(idx === activeIndex),
        }),
      ),
    );
  }

  public created(): void {
    this.setHeadlessComponent(new ViewStackHeadlessComponent(this));
  }
}
</script>

<style src="./style.scss" lang="scss" module></style>
