import { User } from './user/User';

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

