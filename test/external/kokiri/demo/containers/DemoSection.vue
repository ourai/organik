<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { Heading, GridRow, GridCol } from '../../components';

@Component({
  name: 'DemoSection',
})
export default class DemoSection extends Vue {
  @Prop({ type: String, default: '' })
  public readonly title!: string;

  public render(h: CreateElement): VNode {
    const children: VNode[] = this.$slots.default || [];
    const sections: VNode[] = children.filter(
      ({ componentOptions }) => componentOptions && componentOptions.Ctor.name === 'DemoBlock',
    );

    let nodes: VNode[];

    if (sections.length > 0) {
      const firstColNodes: VNode[] = [];
      const secondColNodes: VNode[] = [];

      sections.forEach((section, index) => {
        if (index % 2 === 0) {
          firstColNodes.push(section);
        } else {
          secondColNodes.push(section);
        }
      });

      const secondColNeeds: boolean = secondColNodes.length > 0;

      const cols: VNode[] = [
        h(GridCol, { props: { span: secondColNeeds ? 12 : 24 } }, firstColNodes),
      ];

      if (secondColNeeds) {
        cols.push(h(GridCol, { props: { span: 12 } }, secondColNodes));
      }

      nodes = [h(GridRow, { props: { gutter: 16 } }, cols)];
    } else {
      nodes = children;
    }

    return h('section', [h(Heading, { props: { level: 2 } }, this.title), ...nodes]);
  }
}
</script>
