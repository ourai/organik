import { ViewDescriptor } from '@/types';

export default {
  name: 'AnimationFormView',
  category: 'object',
  render: 'FormView',
  fields: ['title', 'description', 'form', 'episodes'],
} as ViewDescriptor;
