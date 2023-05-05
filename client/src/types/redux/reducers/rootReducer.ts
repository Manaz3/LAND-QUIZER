import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { flashReducer } from './FlashReducer';

export const rootReducer = combineReducers({

  flash: flashReducer, 
  userInfo: userReducer,

});
