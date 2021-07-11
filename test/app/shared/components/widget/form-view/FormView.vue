<template>
  <div class="FormView">
    <el-form>
      <el-form-item :label="f.label" :key="f.name" v-for="f in fields">{{
        dataSource[f.name]
      }}</el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Form as ElForm, FormItem as ElFormItem } from 'element-ui';
import { ObjectViewWidget } from 'handie-vue';

@Component({
  components: { ElForm, ElFormItem },
})
export default class FormView extends ObjectViewWidget {
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
