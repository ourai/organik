<template>
  <div class="TableView">
    <div class="TableView-search" v-if="searchable">
      <search-renderer />
    </div>
    <div class="TableView-tableActions" v-if="topActions.length > 0">
      <action-renderer
        :action="action"
        :context-getter="contextInActionGetter"
        :key="action.text"
        v-for="action in topActions"
      />
    </div>
    <data-table
      class="TableView-dataTable"
      :data="dataSource"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
      v-bind="tableProps"
      v-loading="loading"
      @selection-change="context.setValue($event)"
      @current-change="context.setCurrentPage($event)"
      @size-change="context.setPageSize($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import DataTable from '../../../control/data-table';
import SearchRenderer from '../../../renderer/search-renderer';
import ActionRenderer from '../../../renderer/action-renderer';
import { ListViewWidget } from '../../base';
import { DataTableProps } from './typing';
import { isActionsAuthorized, resolveAuthorizedActions, resolveTableProps } from './helper';

@Component({
  components: { DataTable, SearchRenderer, ActionRenderer },
})
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
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
