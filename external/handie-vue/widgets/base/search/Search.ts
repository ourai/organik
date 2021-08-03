import { FilterDescriptor, SearchCondition, SearchContext } from 'organik';
import { Component, Inject } from 'vue-property-decorator';

import BaseWidget from '../BaseWidget';

@Component
export default class SearchWidget extends BaseWidget {
  @Inject({ from: 'searchContext', default: null })
  protected readonly context!: SearchContext;

  protected condition: SearchCondition = {};

  protected get filters(): FilterDescriptor[] {
    return this.context ? this.context.getFilters() : [];
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
}
