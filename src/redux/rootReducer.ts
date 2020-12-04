import { combineReducers } from 'redux';
import { movies } from './modules/movies';
import { user } from './modules/user';
import { dialog } from './modules/dialog';
import { app } from './modules/application';

export const rootReducer = combineReducers({
  app,
  movies,
  user,
  dialog
});
