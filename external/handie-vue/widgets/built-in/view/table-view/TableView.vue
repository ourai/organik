<script lang="ts">
import { getControl, getRenderer } from 'organik';
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { ListViewWidget } from '../../../base';
import { DataTableProps } from './typing';
import { isActionsAuthorized, resolveAuthorizedActions, resolveTableProps } from './helper';

@Component
export default class TableView extends ListViewWidget {
  private tableProps: DataTableProps = {} as any;

  private get searchable() {
    return !!this.context.getSearch();
  }

  private get accessible() {
    return this.$store.state.session.authority.accessible;
  }

  private get topActions() {
    return isActionsAuthorized(this.context.getActionsAuthority(), this.accessible)
      ? resolveAuthorizedActions(
          this.context.getActions().filter(({ context }) => context && context !== 'single'),
          this.context.getActionsAuthority(),
          this.accessible,
        )
      : [];
  }

  private get contextInActionGetter() {
    return () => this.context;
  }

  protected created(): void {
    this.tableProps = resolveTableProps(this.context, this.accessible);

    this.context.load();
  }

  private render(h: CreateElement): VNode {
    const children: VNode[] = [];

    if (this.searchable) {
      children.push(
        h('div', { staticClass: 'TableView-search' }, [h(getRenderer('SearchRenderer'))]),
      );
    }

    if (this.topActions.length > 0) {
      children.push(
        h(
          'div',
          { staticClass: 'TableView-tableActions' },
          this.topActions.map(action =>
            h(getRenderer('ActionRenderer'), {
              props: { action, contextGetter: this.contextInActionGetter },
            }),
          ),
        ),
      );
    }

    const { columns, hidePagination, ...others } = this.tableProps;

    children.push(
      h(getControl('DataTable'), {
        staticClass: 'TableView-dataTable',
        props: {
          columns,
          data: this.dataSource,
          currentPage: this.pageNum,
          pageSize: this.pageSize,
          total: this.total,
          hidePagination,
        },
        attrs: others,
        directives: [{ name: 'loading', value: this.loading }],
        on: {
          'selection-change': selected => this.context.setValue(selected),
          'current-change': currentPage => this.context.setCurrentPage(currentPage),
          'size-change': pageSize => this.context.setPageSize(pageSize),
        },
      }),
    );

    return h(
      'div',
      {
        staticClass: 'TableView',
      },
      children,
    );
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
