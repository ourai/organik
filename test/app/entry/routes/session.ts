import { RouteConfig } from 'handie-vue';

import { NotFound } from '../../domain/session/views';

export default [{ path: '*', component: NotFound }] as RouteConfig[];
