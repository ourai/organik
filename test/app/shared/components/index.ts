import Vue from 'vue';
import { Loading } from 'element-ui';

import Button from './button';
import DataTable from './data-table';

Vue.use(Loading);

const controls = [
  { name: 'OlButton', ctor: Button },
  { name: 'DataTable', ctor: DataTable },
];

export { controls as default, Button, DataTable };
