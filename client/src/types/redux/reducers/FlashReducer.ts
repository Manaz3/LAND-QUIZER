import { Action } from '../../Action';
import { State } from '../../game/State';

export const initialState: State = {
  themes: []
};

export const flashReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'flash/initialFlash':
      return { ...state, themes: action.payload };
    default:
      return state;
  }
};
