import { ResponseResult } from 'handie-vue';

import httpClient from '@/utils/http';

import { UserAndPermissions } from './typing';

class SessionRepository {
  public getCurrentUser(): Promise<ResponseResult<UserAndPermissions>> {
    return httpClient.get('/api/session/user');
  }
}

const repo = new SessionRepository();

export { SessionRepository, repo as default };
