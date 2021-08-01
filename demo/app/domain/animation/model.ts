import { ModelDescriptor } from '@/types';

import { MODULE_NAME } from './helper';

export default {
  name: MODULE_NAME,
  fields: [
    { name: 'id', label: 'ID', dataType: 'string', required: true },
    { name: 'title', label: '标题', dataType: 'string', required: true },
    {
      name: 'form',
      label: '形式',
      dataType: 'enum',
      options: [
        { name: 'tva', value: 'tva', label: '电视动画' },
        { name: 'ova', value: 'ova', label: '原创动画' },
        { name: 'mva', value: 'mva', label: '剧场动画' },
      ],
      required: true,
    },
    { name: 'description', label: '简介', dataType: 'text' },
    { name: 'episodes', label: '剧集', dataType: 'o2m' },
  ],
} as ModelDescriptor;
