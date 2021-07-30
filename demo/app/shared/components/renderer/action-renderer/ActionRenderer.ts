import { CreateElement, VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ActionDescriptor, ViewContext } from '../../../types';
import { Button } from '../../control';
import { getActionComponent, resolveVirtualNodeData } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  components: { Button },
})
export default class ActionRenderer extends Vue {
  @Prop({ type: Object, default: null })
  private readonly action!: ActionDescriptor;

  @Prop({ type: Function, default: () => {} }) // eslint-disable-line @typescript-eslint/no-empty-function
  private readonly contextGetter!: () => ViewContext;

  private disabled: boolean = false;

  private get context(): ViewContext {
    return this.contextGetter();
  }

  private get eventName(): string {
    return `change.vue_inst_${(this as any)._uid}`;
  }

  private render(h: CreateElement): VNode | null {
    return this.action
      ? h(
          getActionComponent(this.action.render),
          resolveVirtualNodeData(this.action, this.context, this),
          this.action.text || '',
        )
      : null;
  }

  private created(): void {
    const { context } = this.action;
    const batchOrBoth = context === 'batch' || context === 'both';

    this.disabled = batchOrBoth;

    if (batchOrBoth) {
      this.context.on(
        this.eventName,
        value => (this.disabled = context === 'batch' ? value.length < 2 : value.length === 0),
      );
    }
  }

  private beforeDestroy(): void {
    this.context.off(this.eventName);
  }
}
