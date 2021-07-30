import { ModuleDescriptor, convertRepositoryToServerActionMap } from 'handie-vue';

import { MODULE_NAME, testUtil } from './helper';
import model from './model';
import * as repo from './repository';
import * as views from './views';
import TestWidget from './widgets/test-widget';

export default {
  name: MODULE_NAME,
  model,
  actions: convertRepositoryToServerActionMap(repo),
  views,
  exports: {
    utils: { test: testUtil },
    widgets: { test: TestWidget },
  },
  components: {
    OlButton: true,
  },
} as ModuleDescriptor;
