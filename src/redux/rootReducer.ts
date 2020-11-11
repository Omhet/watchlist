import { combineReducers } from 'redux';
import { movies } from './modules/movies';
import { user } from './modules/user';

export const rootReducer = combineReducers({
  movies,
  user
});
