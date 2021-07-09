import { setViewCreator } from 'organik';
import Vue from 'vue';

setViewCreator((context, provider, renderer) =>
  Vue.extend({
    name: context.getView().name,
    components: context.getComponents(),
    provide: provider,
    render: h => h(renderer),
  }),
);

export * from './module';
export * from './context';
export * from './view';
