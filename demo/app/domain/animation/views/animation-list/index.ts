import { ViewDescriptor } from '@/types';

import TitleField from './TitleField.vue';
import EpisodesField from './EpisodesField.vue';

export default {
  name: 'AnimationListView',
  type: 'list',
  render: 'TableView',
  config: { operationColumnWidth: 250 },
  fields: [
    { name: 'title', render: TitleField, config: { width: '300' } },
    'description',
    {
      name: 'episodes',
      label: '集数',
      render: EpisodesField,
      config: { width: '60', align: 'center' },
    },
  ],
  actions: [
    { name: 'gotoCreateFormView', authority: 'animation:edit', primary: true },
    { name: 'deleteList', authority: 'animation:edit' },
    { text: '选择一条及以上', context: 'both' },
    'gotoDetailView',
    { name: 'gotoEditFormView', authority: 'animation:edit' },
    { name: 'deleteOne', authority: 'animation:edit' },
  ],
  search: {
    filters: ['title', 'description'],
  },
} as ViewDescriptor;
