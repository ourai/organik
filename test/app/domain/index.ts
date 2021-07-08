import { registerModules } from 'handie-vue';

import session from './session';
import common from './common';
import animation from './animation';
import comic from './comic';
import game from './game';
import novel from './novel';

registerModules([common, session, animation, comic, game, novel]);
