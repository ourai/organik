import { EventHandler, EventHandlers, ViewContext } from 'organik';
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';

import { getEventWithNamespace, resolveBindEvent } from '../helper';

@Component
export default class ViewWidget<ViewContextType extends ViewContext = ViewContext> extends Vue {
  @Inject({ from: 'viewContext', default: null })
  protected readonly context!: ViewContextType;

  protected loading: boolean = false;

  protected on(event: string | EventHandlers, handler?: EventHandler): void {
    this.context.on(resolveBindEvent(this, event), handler);
  }

  protected off(event?: string, handler?: EventHandler): void {
    this.context.off(getEventWithNamespace(this, event), handler);
  }

  protected created(): void {
    this.on('busyChange', busy => (this.loading = busy));
  }

  protected beforeDestroy(): void {
    this.off();
  }
}
