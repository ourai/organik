import Vue from 'vue';
import { Loading } from 'element-ui';
import { registerComponent } from 'handie-vue';

import Button from './button';
import DataTable from './data-table';

Vue.use(Loading);

[
  { name: 'OlButton', ctor: Button },
  { name: 'DataTable', ctor: DataTable },
].forEach(registerComponent);
