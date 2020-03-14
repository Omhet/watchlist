import { combineReducers } from 'redux';

import count from './count/reducer';

export const rootReducer = combineReducers({
  count
});

export type RootState = ReturnType<typeof rootReducer>;
