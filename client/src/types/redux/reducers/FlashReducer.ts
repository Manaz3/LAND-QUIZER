import { Action } from '../../Action';
import { State } from '../../game/State';

const initialState: State = {
  flashes: [],
  themes: []
};

export const flashReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'flash/initialFlash':
      return { ...state, flashes: action.payload };
    default:
      return state;
  }
};
