import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

<<<<<<< HEAD:client/src/types/redux/store.ts
export const store = createStore(rootReducer, composeWithDevTools());
=======
export const store = createStore(
  rootReducer,
  composeWithDevTools() // подключение Redux DevTools
);

>>>>>>> routes:my-app/src/types/redux/store.ts
export type RootState = ReturnType<typeof store.getState>;
