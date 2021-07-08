import { RouteConfig } from '@/types';

import { AnimationList, AnimationDetail, AnimationForm } from '../../domain/animation/views';
import { ComicList } from '../../domain/comic/views';
import { GameList, GameDetail } from '../../domain/game/views';
import { NovelList } from '../../domain/novel/views';

import AdminLayout from '../layouts/admin';

export default {
  name: 'otaku',
  path: '/otaku',
  component: AdminLayout,
  meta: { text: '宅文化', auth: 'otaku' },
  redirect: '/otaku/animations',
  children: [
    {
      name: 'animationList',
      path: 'animations',
      component: AnimationList,
      meta: { text: '动画', auth: 'animation:read' },
    },
    {
      name: 'animationDetail',
      path: 'animations/:id',
      component: AnimationDetail,
      meta: { text: '动画详情', auth: 'animation:read', show: false },
    },
    {
      name: 'animationNewForm',
      path: 'animations/new',
      component: AnimationForm,
      meta: { text: '新建动画', auth: 'animation:edit', show: false },
    },
    {
      name: 'animationEditForm',
      path: 'animations/:id/edit',
      component: AnimationForm,
      meta: { text: '编辑动画', auth: 'animation:edit', show: false },
    },
    {
      name: 'comicList',
      path: 'comics',
      component: ComicList,
      meta: { text: '漫画', auth: 'comic:read' },
    },
    {
      name: 'gameList',
      path: 'games',
      component: GameList,
      meta: { text: '游戏', auth: 'game:read' },
    },
    {
      name: 'gameDetail',
      path: 'games/:id',
      component: GameDetail,
      meta: { text: '游戏详情', auth: 'game:read', show: false },
    },
    {
      name: 'novelList',
      path: 'novels',
      component: NovelList,
      meta: { text: '小说', auth: 'novel:read' },
    },
  ],
} as RouteConfig;
