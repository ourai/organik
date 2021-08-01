import { ViewDescriptor } from '@/types';

import EpisodesField from './EpisodesField.vue';

export default {
  name: 'AnimationDetailView',
  category: 'object',
  render: 'DetailView',
  fields: ['title', 'description', 'form', { name: 'episodes', render: EpisodesField }],
} as ViewDescriptor;
