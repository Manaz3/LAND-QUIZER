import { User } from './user/User';
import { Flash } from './game/Flash'

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
      payload: Flash;
    };

