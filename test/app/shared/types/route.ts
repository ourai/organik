import Vue, { ComponentOptions, AsyncComponent } from 'vue';
import { RouteConfig as _RouteConfig, RouteRecord as _RouteRecord } from 'vue-router';

type RouteMeta = {
  text?: string;
  icon?: string;
  show?: boolean;
  auth?: string;
};

type RouteConfig = Omit<_RouteConfig, 'meta' | 'children' | 'component'> & {
  component?: ComponentOptions<Vue> | typeof Vue | AsyncComponent;
  children?: RouteConfig[];
  meta?: RouteMeta;
};

type RouteRecord = Omit<_RouteRecord, 'meta'> & {
  meta: RouteMeta;
};

export { RouteMeta, RouteConfig, RouteRecord };
