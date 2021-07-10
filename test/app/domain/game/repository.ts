import { Pagination, ResponseResult } from 'handie-vue';

import httpClient from '@/utils/http';

import { GameEntity } from './typing';

async function getList(condition: Pagination): Promise<ResponseResult<GameEntity>> {
  return httpClient.get('/api/games', { params: condition });
}

export { getList };
