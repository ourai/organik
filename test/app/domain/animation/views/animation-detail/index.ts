import { createDetailViewGetter } from 'handie-vue';

import context from '../../context';

export default createDetailViewGetter(context, {
  name: 'AnimationDetailView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
});
