<template>
  <div class="DetailView">
    <el-form>
      <el-form-item :label="f.label" :key="f.name" v-for="f in fields">{{
        dataSource[f.name]
      }}</el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import ElForm, { FormItem as ElFormItem } from '../../../control/form';
import { ObjectViewWidget } from '../../base';

@Component({
  components: { ElForm, ElFormItem },
})
export default class DetailView extends ObjectViewWidget {
  private get id() {
    return this.$route.params.id || '';
  }

  protected created(): void {
    const ctx = this.context;

    if (this.id && ctx.getOne) {
      ctx.getOne(this.id, data => (this.dataSource = data));
    }
  }
}
</script>
