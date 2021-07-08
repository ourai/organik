import DemoHome from './Home.vue';

import demoRoutes from './routes';

const routes = [
  { path: '/', name: 'home', component: DemoHome },
  ...demoRoutes.map(({ text, ...others }) => others),
];

export { routes, demoRoutes };
