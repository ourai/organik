import { ModuleDescriptor } from 'handie-vue';

import { MODULE_NAME } from './helper';
import * as widgets from './widgets';

export default {
  name: MODULE_NAME,
  exports: { widgets },
  components: {
    OlButton: true,
    DataTable: true,
  },
} as ModuleDescriptor;
