import { createAction } from 'typesafe-actions';
import { DialogId } from '../../types/dialog';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from '../types';
import { dialogFsa } from './dialog';
import { moviesFsa } from './movies';
import { getCurrentUser, userFsa } from './user';

export const fsa = {
  setError: createAction('APP/SET ERROR')<Error | undefined>(),
  setPageError: createAction('APP/SET PAGE ERROR')<Error | undefined>()
};
export const appFsa = fsa;

type State = {
  error?: Error;
  pageError?: Error;
};

const initialState: State = {};

export const app = withState(initialState)
  .add(fsa.setError, (state, { payload }) => ({
    ...state,
    error: payload
  }))
  .add(fsa.setPageError, (state, { payload }) => ({
    ...state,
    pageError: payload
  }));

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
