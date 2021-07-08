// 必须按这个顺序引入
import '@/components';
import './actions';
import '../domain';

import storeModules from './store';
import routes from './router';

export { storeModules, routes };
export * from './aspects';
