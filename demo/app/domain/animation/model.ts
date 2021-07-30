import { ModelDescriptor } from 'handie-vue';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'id', dataType: 'string', required: true },
    { name: 'title', dataType: 'string', required: true },
    { name: 'description', dataType: 'string' },
  ],
} as ModelDescriptor;
