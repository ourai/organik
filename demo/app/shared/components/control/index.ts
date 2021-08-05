import Vue from 'vue';
import { Loading } from 'element-ui';

Vue.use(Loading);

export * from 'handie-vue/controls';
export { Input, Select, Option, OptionGroup, Radio, RadioGroup, Form, FormItem } from 'element-ui';

export { default as DataTable } from './data-table';
