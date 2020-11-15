import { ThunkAction } from '../types';
import { getCurrentUser } from './user';

export const startApp = (): ThunkAction => dispatch => {
  dispatch(getCurrentUser());
};
