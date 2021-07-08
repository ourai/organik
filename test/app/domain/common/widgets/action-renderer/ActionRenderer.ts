import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ActionDescriptor, ViewContext } from 'handie-vue';

import { getComponents } from '../../context';
import { getActionComponent, resolveVirtualNodeData } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  components: getComponents(),
})
export default class ActionRenderer extends Vue {
  @Prop({ type: Object, default: null })
  private readonly action!: ActionDescriptor;

  @Prop({ type: Function, default: () => {} }) // eslint-disable-line @typescript-eslint/no-empty-function
  private readonly contextGetter!: () => ViewContext;

  private render(h: CreateElement): VNode | null {
    return this.action
      ? h(
          getActionComponent(this.action.render),
          resolveVirtualNodeData(this.action, this.contextGetter(), this),
          this.action.text || '',
        )
      : null;
  }
}
