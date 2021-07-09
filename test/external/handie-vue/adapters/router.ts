import { isString, isFunction, isPlainObject } from '@ntks/toolbox';
import { ComponentGetter, getViews } from 'organik';
import VueRouter from 'vue-router';

import { RouteComponent, RouteConfig, ResolvedRouteConfig, RouterCreator } from '../types';

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
        const viewRenderer = getViews(moduleName)[viewName];

        if (viewRenderer) {
          if (isFunction(viewRenderer)) {
            resolved.component = (viewRenderer as ComponentGetter)();
          }
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
