<template>
  <div class="AnimationListSearch">
    <el-form :model="condition" size="small" inline>
      <el-form-item :label="filter.label" :key="filter.name" v-for="filter in filters">
        <filter-renderer
          :filter="filter"
          :value="condition[filter.name]"
          @change="setFilterValue"
        />
      </el-form-item>
      <el-form-item>
        <kokiri-button type="primary" @click.prevent="submit">查询</kokiri-button>
        <kokiri-button @click="reset">重置</kokiri-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import KokiriButton from '../../control/button';
import ElInput from '../../control/input';
import ElForm, { FormItem as ElFormItem } from '../../control/form';
import FilterRenderer from '../../renderer/filter-renderer';
import { SearchWidget } from '../base';

@Component({
  components: { KokiriButton, ElInput, ElForm, ElFormItem, FilterRenderer },
})
export default class FormSearch extends SearchWidget {
  protected created(): void {
    this.initCondition();
  }
}
</script>
