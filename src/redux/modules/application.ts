import { DialogId } from '../../types/dialog';
import { ThunkAction } from '../types';
import { dialogFsa } from './dialog';
import { moviesFsa } from './movies';
import { getCurrentUser, userFsa } from './user';

export const startApp = (): ThunkAction => dispatch => {
  dispatch(getCurrentUser());
};

export const openSignInIfNeeded = (): ThunkAction => (dispatch, getState) => {
  const {
    user: { isSignedIn }
  } = getState();

  if (!isSignedIn) {
    dispatch(dialogFsa.openDialog(DialogId.SignIn));
  }
};

export const resetSession = (): ThunkAction => dispatch => {
  dispatch(userFsa.signOut());
  dispatch(moviesFsa.setWatchlist([]));
  window.location.replace('/');
};
