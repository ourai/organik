import { ViewDescriptor } from '@/types';

export default {
  name: 'AnimationFormView',
  category: 'object',
  render: 'FormView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
} as ViewDescriptor;
