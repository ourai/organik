import { ListViewContext } from 'organik';
import { Component } from 'vue-property-decorator';

import ViewWidget from './View';

@Component
export default class ListViewWidget extends ViewWidget<ListViewContext> {
  protected dataSource: any[] = [];

  protected pageNum: number = 1;

  protected pageSize: number = 20;

  protected total: number = 0;

  protected created(): void {
    this.on({
      dataChange: dataSource => (this.dataSource = dataSource),
      totalChange: total => (this.total = total),
      currentPageChange: pageNum => (this.pageNum = pageNum),
      pageSizeChange: pageSize => (this.pageSize = pageSize),
    });
  }
}
