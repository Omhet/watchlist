import { combineReducers } from 'redux';
import { movies } from './modules/movies';
import { user } from './modules/user';
import { dialog } from './modules/dialog';

export const rootReducer = combineReducers({
  movies,
  user,
  dialog
});
