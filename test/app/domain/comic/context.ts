import { convertRepositoryToServerActionMap, createModuleContext } from 'handie-vue';

import { MODULE_NAME } from './helper';
import repository from './repository';

export default createModuleContext({
  moduleName: MODULE_NAME,
  actions: convertRepositoryToServerActionMap(repository),
});
