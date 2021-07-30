<template>
  <div class="AnimationListSearch">
    <el-form :model="condition" size="small" inline>
      <el-form-item :label="filter.label" :key="filter.name" v-for="filter in filters">
        <el-input
          :value="condition[filter.name]"
          :placeholder="`请输入${filter.label}`"
          @input="setFilterValue(filter.name, $event)"
        />
      </el-form-item>
      <el-form-item>
        <kokiri-button type="primary" @click="submit">查询</kokiri-button>
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
import { SearchWidget } from '../base';

@Component({
  components: { KokiriButton, ElInput, ElForm, ElFormItem },
})
export default class FormSearch extends SearchWidget {
  protected created(): void {
    this.initCondition();
  }
}
</script>
