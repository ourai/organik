import Vue from 'vue';
import { Loading } from 'element-ui';

import OlButton from './button';
import DataTable from './data-table';

Vue.use(Loading);

const controls = [
  { name: 'OlButton', ctor: OlButton },
  { name: 'DataTable', ctor: DataTable },
];

export { controls as default, OlButton, DataTable };
