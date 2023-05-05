import { Action } from '../../Action';
import { State } from '../../user/State';

const initialState: State = { user: undefined, totalScore: 0 };

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
      return { ...state, totalScore: state.totalScore + action.payload };
    case 'user/minusScore':
      return { ...state, totalScore: state.totalScore - action.payload };
    default:
      return state;
  }
};
