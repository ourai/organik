import { createDetailView } from 'handie-vue';

import context from '../../context';

export default createDetailView(context, {
  name: 'AnimationDetailView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
});
