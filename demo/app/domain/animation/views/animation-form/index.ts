import { ViewDescriptor } from '@/types';

export default {
  name: 'AnimationFormView',
  category: 'object',
  render: 'FormView',
  fields: ['title', 'description', { name: 'episodes', label: '剧集' }],
} as ViewDescriptor;
