import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { flashReducer } from './FlashReducer';

export const rootReducer = combineReducers({
<<<<<<< HEAD:client/src/types/redux/reducers/rootReducer.ts
  user: userReducer,
  flash: flashReducer, 
=======
  userInfo: userReducer,
>>>>>>> routes:my-app/src/types/redux/reducers/rootReducer.ts
});
