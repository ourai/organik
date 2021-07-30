import { ModelDescriptor } from '@/types';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'id', label: 'ID', dataType: 'string', required: true },
    { name: 'title', label: '标题', dataType: 'string', required: true },
    { name: 'description', label: '简介', dataType: 'text' },
  ],
} as ModelDescriptor;
