import { Action } from '../../Action';
import { State } from '../../user/State';

const initialState: State = { user: undefined };

export const userReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'user/login':
      return { ...state, user: action.payload };
    case 'user/logout':
      return { ...state, user: undefined };
    case 'user/plusScore':
      return {
        ...state,
        user: {
          ...state.user!,
          totalScore: state.user!.totalScore + action.payload,
        },
      };
    case 'user/minusScore':
      return {
        ...state,
        user: {
          ...state.user!,
          totalScore: state.user!.totalScore - action.payload,
        },
      };
    default:
      return state;
  }
};
