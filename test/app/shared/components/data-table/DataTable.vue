<template>
  <div class="DataTable">
    <div class="DataTable-tableWrapper">
      <el-table
        class="DataTable-table"
        :data="data"
        height="100%"
        border
        v-bind="$attrs"
        v-on="filteredListeners"
      >
        <template v-for="col in filteredColumns">
          <el-table-column v-bind="col" :key="col.prop" v-if="col.render">
            <template slot-scope="{ row, $index }">
              <expand :row-index="$index" :row="row" :column="col" :render-content="col.render" />
            </template>
          </el-table-column>
          <el-table-column v-bind="col" :key="col.prop" v-else />
        </template>
      </el-table>
    </div>
    <div class="DataTable-paginationWrapper" v-if="!hidePagination">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import {
  Table as ElTable,
  TableColumn as ElTableColumn,
  Pagination as ElPagination,
} from 'element-ui';
import { TableColumn } from 'handie-vue';

import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_NUMBER } from './helper';
import Expand from './Expand';

const localEvents = { 'current-change': true, 'size-change': true };

@Component({
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
    Expand,
  },
})
export default class DataTable extends Vue {
  @Prop({ type: Array, default: () => [] })
  private readonly data!: Record<string, any>[];

  @Prop({ type: Array, default: () => [] })
  private readonly columns!: TableColumn[];

  @Prop({ type: Boolean, default: false })
  private readonly hidePagination!: boolean;

  @Prop({ type: Number, default: DEFAULT_PAGE_NUMBER })
  private readonly currentPage!: number;

  @Prop({ type: Number, default: DEFAULT_PAGE_SIZE })
  private readonly pageSize!: number;

  @Prop({ type: Number, default: 0 })
  private readonly total!: number;

  private get filteredColumns(): TableColumn[] {
    return this.columns.filter(col => !col.isValid || col.isValid());
  }

  private get filteredListeners(): Record<string, any> {
    const filtered: Record<string, any> = {};
    const listeners = this.$listeners;

    Object.keys(listeners).forEach(k => {
      if (!localEvents[k]) {
        filtered[k] = listeners[k];
      }
    });

    return filtered;
  }

  @Emit('current-change')
  private handleCurrentChange() {} // eslint-disable-line

  @Emit('size-change')
  private handleSizeChange() {} // eslint-disable-line
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
