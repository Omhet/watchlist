import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer, RootState } from './rootReducer';

export default function configureStore(preloadedState?: RootState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
