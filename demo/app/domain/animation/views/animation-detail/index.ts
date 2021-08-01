import { ViewDescriptor } from '@/types';

export default {
  name: 'AnimationDetailView',
  category: 'object',
  render: 'DetailView',
  fields: ['title', 'description', 'form', { name: 'episodes', label: '剧集' }],
} as ViewDescriptor;
