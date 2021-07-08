import { ModuleDescriptor } from 'handie-vue';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  imports: ['animation.utils.test', 'animation.widgets.test'],
  components: {
    TestWidget: 'animation.widgets.test',
  },
} as ModuleDescriptor;
