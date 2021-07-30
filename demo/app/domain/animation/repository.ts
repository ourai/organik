import { Pagination, ResponseResult } from '@/types';
import httpClient from '@/utils/http';

import { AnimationEntity } from './typing';

async function getList(condition: Pagination): Promise<ResponseResult<AnimationEntity[]>> {
  return httpClient.get('/api/animations', { params: condition });
}

async function getOne(id: string): Promise<ResponseResult<AnimationEntity>> {
  return httpClient.get(`/api/animations/${id}`);
}

async function deleteList(
  animationList: AnimationEntity[],
): Promise<ResponseResult<AnimationEntity[]>> {
  return httpClient.delete('/api/animations', {
    params: { ids: animationList.map(({ id }) => id).join(',') },
  });
}

async function deleteOne(animation: AnimationEntity): Promise<ResponseResult<AnimationEntity>> {
  return httpClient.delete(`/api/animations/${animation.id}`);
}

export { getList, getOne, deleteList, deleteOne };
