import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { flashReducer } from './FlashReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  flash: flashReducer, 
});
