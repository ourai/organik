import {
  FilterDescriptor,
  EventHandler,
  EventHandlers,
  SearchCondition,
  SearchContext,
} from 'organik';
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';

import { getEventWithNamespace, resolveBindEvent } from '../helper';

@Component
export default class SearchWidget extends Vue {
  @Inject({ from: 'searchContext', default: null })
  protected readonly context!: SearchContext;

  protected condition: SearchCondition = {};

  protected get filters(): FilterDescriptor[] {
    return this.context ? this.context.getFilters() : [];
  }

  protected on(event: string | EventHandlers, handler?: EventHandler): void {
    this.context.on(resolveBindEvent(this, event), handler);
  }

  protected off(event?: string, handler?: EventHandler): void {
    this.context.off(getEventWithNamespace(this, event), handler);
  }

  protected initCondition(condition: SearchCondition = {}): void {
    this.context.setValue({ ...this.condition, ...condition });
  }

  protected setFilterValue(name: string, value: any): void {
    this.context.setFilterValue(name, value);
  }

  protected submit(): void {
    this.context.submit();
  }

  protected reset(): void {
    this.context.reset();
  }

  protected created(): void {
    this.condition = this.context.getDefaultValue();

    this.on({
      change: value => (this.condition = { ...value }),
      filterChange: ({ name, value }) => (this.condition[name] = value),
    });
  }

  protected beforeDestroy(): void {
    this.off();
  }
}
