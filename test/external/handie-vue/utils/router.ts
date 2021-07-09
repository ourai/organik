import { isString, isFunction } from '@ntks/toolbox';
import VueRouter from 'vue-router';

import { RouteComponent, RouteConfig, ResolvedRouteConfig, RouterCreator } from '../types';
import { getViewGetter } from '../adapters/module';

let routerCreator = (() => function () {} as any) as RouterCreator; // eslint-disable-line @typescript-eslint/no-empty-function

function setRouterCreator(creator: RouterCreator): void {
  if (isFunction(creator)) {
    routerCreator = creator;
  }
}

function resolveRoutes(routes: RouteConfig[]): ResolvedRouteConfig[] {
  return routes.map(({ component, children, ...others }) => {
    const resolved: ResolvedRouteConfig = others;

    if (component) {
      if (isString(component)) {
        const [moduleName, _, viewName] = (component as string).split('.');
        const viewGetter = getViewGetter(moduleName, viewName);

        if (viewGetter) {
          resolved.component = viewGetter();
        }
      } else {
        resolved.component = component as RouteComponent;
      }
    }

    if (children) {
      resolved.children = resolveRoutes(children);
    }

    return resolved;
  });
}

function createRouter(routes: RouteConfig[]): VueRouter {
  return routerCreator(resolveRoutes(routes));
}

export { setRouterCreator, createRouter };
