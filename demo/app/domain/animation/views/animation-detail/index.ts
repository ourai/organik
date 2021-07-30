import { ViewDescriptor } from '@/types';

export default {
  name: 'AnimationDetailView',
  category: 'object',
  render: 'DetailView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
} as ViewDescriptor;
