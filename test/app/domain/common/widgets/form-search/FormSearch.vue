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
        <el-button type="primary" @click="submit">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  Button as ElButton,
} from 'element-ui';
import { SearchWidget } from 'handie-vue';

import { getComponents } from '../../context';

@Component({
  components: getComponents({ ElForm, ElFormItem, ElInput, ElButton }),
})
export default class FormSearch extends SearchWidget {
  protected created(): void {
    this.initCondition();
  }
}
</script>
