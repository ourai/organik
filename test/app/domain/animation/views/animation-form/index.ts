import { createFormViewGetter } from 'handie-vue';

import context from '../../context';

export default createFormViewGetter(context, {
  name: 'AnimationFormView',
  fields: [
    { name: 'title', label: '标题' },
    { name: 'description', label: '简介' },
    { name: 'episodes', label: '剧集' },
  ],
});
