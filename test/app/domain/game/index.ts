import { ModuleDescriptor } from 'handie-vue';

import { MODULE_NAME } from './helper';
import * as views from './views';

export default {
  name: MODULE_NAME,
  views,
  imports: ['common.widgets.TableView', 'common.widgets.DetailView'],
  components: {
    TableView: 'common.widgets.TableView',
    DetailView: 'common.widgets.DetailView',
  },
} as ModuleDescriptor;
