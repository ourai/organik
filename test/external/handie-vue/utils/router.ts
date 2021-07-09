import { isFunction } from '@ntks/toolbox';
import VueRouter from 'vue-router';

import { RouteConfig, RouterCreator } from '../types';

let routerCreator = (() => function () {} as any) as RouterCreator; // eslint-disable-line @typescript-eslint/no-empty-function

function setRouterCreator(creator: RouterCreator): void {
  if (isFunction(creator)) {
    routerCreator = creator;
  }
}

function createRouter(routes: RouteConfig[]): VueRouter {
  return routerCreator(routes);
}

export { setRouterCreator, createRouter };
