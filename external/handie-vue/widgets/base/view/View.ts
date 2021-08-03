import { ViewContext } from 'organik';
import { Component, Inject } from 'vue-property-decorator';

import BaseWidget from '../BaseWidget';

@Component
export default class ViewWidget<
  ViewContextType extends ViewContext = ViewContext
> extends BaseWidget {
  @Inject({ from: 'viewContext', default: null })
  protected readonly context!: ViewContextType;

  protected loading: boolean = false;

  protected created(): void {
    this.on('busyChange', busy => (this.loading = busy));
  }
}
