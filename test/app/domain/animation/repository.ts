import { Pagination, ResponseResult } from 'handie-vue';

import httpClient from '@/utils/http';

import { AnimationEntity } from './typing';

class AnimationRepository {
  public async getList(condition: Pagination): Promise<ResponseResult<AnimationEntity[]>> {
    return httpClient.get('/api/animations', { params: condition });
  }

  public async getOne(id: string): Promise<ResponseResult<AnimationEntity>> {
    return httpClient.get(`/api/animations/${id}`);
  }

  public async deleteList(
    animationList: AnimationEntity[],
  ): Promise<ResponseResult<AnimationEntity[]>> {
    return httpClient.delete('/api/animations', {
      params: { ids: animationList.map(({ id }) => id).join(',') },
    });
  }

  public async deleteOne(animation: AnimationEntity): Promise<ResponseResult<AnimationEntity>> {
    return httpClient.delete(`/api/animations/${animation.id}`);
  }
}

const repo = new AnimationRepository();

export { AnimationRepository, repo as default };
