import { Pagination, ResponseResult } from 'handie-vue';

import httpClient from '@/utils/http';

import { GameEntity } from './typing';

class GameRepository {
  public async getList(condition: Pagination): Promise<ResponseResult<GameEntity>> {
    return httpClient.get('/api/games', { params: condition });
  }
}

const repo = new GameRepository();

export { GameRepository, repo as default };
