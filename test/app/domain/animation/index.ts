import { ModuleDescriptor } from 'handie-vue';

import { MODULE_NAME, testUtil } from './helper';
import model from './model';
import repository from './repository';
import * as views from './views';
import TestWidget from './widgets/test-widget';

export default {
  name: MODULE_NAME,
  model,
  repository,
  views,
  imports: ['common.widgets.TableView', 'common.widgets.DetailView', 'common.widgets.FormView'],
  exports: {
    utils: { test: testUtil },
    widgets: { test: TestWidget },
  },
  components: {
    OlButton: true,
    TableView: 'common.widgets.TableView',
    DetailView: 'common.widgets.DetailView',
    FormView: 'common.widgets.FormView',
  },
} as ModuleDescriptor;
