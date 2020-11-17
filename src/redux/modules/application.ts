import { DialogId } from '../../types/dialog';
import { ThunkAction } from '../types';
import { dialogFsa } from './dialog';
import { getCurrentUser } from './user';

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
