import { ViewDescriptor } from 'handie-vue';

export default {
  name: 'AnimationFormView',
  type: 'object',
  render: 'FormView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
} as ViewDescriptor;
