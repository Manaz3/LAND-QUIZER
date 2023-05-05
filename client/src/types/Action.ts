import { User } from './user/User';
import { Theme } from './game/State'

export type Action =
  | {
      type: 'user/login';
      payload: User;
    }
  | {
      type: 'user/logout';
    }
  | {
      type: 'user/plusScore';
      payload: number;
    }
  | {
      type: 'user/minusScore';
      payload: number;

    }
  | {
      type: 'flash/initialFlash';
      payload: Theme[];
    };


