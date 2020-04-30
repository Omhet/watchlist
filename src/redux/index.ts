import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './rootReducer';
import { RootState } from './types';

export default function configureStore(preloadedState?: RootState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
