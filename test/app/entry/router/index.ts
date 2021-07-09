import { RouteConfig } from '@/types';

import session from './session';
import otaku from './otaku';

export default [
  { name: 'root', path: '/', redirect: '/otaku' },
  otaku,
  ...session,
] as RouteConfig[];