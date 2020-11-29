import { createAction } from 'typesafe-actions';
import { User, UserError, UserUpdateParams } from '../../types/user';
import {
  deleteCurrentUser,
  fetchCurrentUser,
  signInUser,
  signOutUser,
  signUpUser,
  updateCurrentUser
} from '../../utils/request';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from '../types';
import { resetSession } from './application';
import { moviesFsa } from './movies';

type UserInfo = Omit<User, 'isSignedIn'>;

export const fsa = {
  signIn: createAction('USER/SIGN IN')<UserInfo>(),
  signOut: createAction('USER/SIGN OUT')(),
  setError: createAction('USER/SET ERROR')<UserError>(),
  updateUser: createAction('USER/UPDATE')<Partial<UserInfo>>()
};
export const userFsa = fsa;

type State = User & {
  error?: UserError;
};

const initialState: State = {
  isSignedIn: false
};

export const user = withState(initialState)
  .add(fsa.signIn, (state, { payload }) => ({
    ...state,
    ...payload,
    isSignedIn: true
  }))
  .add(fsa.signOut, state => ({
    ...state,
    isSignedIn: false
  }))
  .add(fsa.setError, (state, { payload }) => ({
    ...state,
    error: payload
  }))
  .add(fsa.updateUser, (state, { payload }) => ({
    ...state,
    ...payload
  }));

export const getCurrentUser = (): ThunkAction => async dispatch => {
  const { username, movies } = await fetchCurrentUser();
  dispatch(userFsa.signIn({ username }));
  dispatch(moviesFsa.setWatchlist(movies));
};

export const signIn = (
  username: string,
  password: string
): ThunkAction => async dispatch => {
  await signInUser(username, password);
  dispatch(getCurrentUser());
};

export const signUp = (
  username: string,
  password: string
): ThunkAction => async dispatch => {
  try {
    await signUpUser(username, password);
    dispatch(signIn(username, password));
  } catch (error) {
    dispatch(userFsa.setError(error.message));
  }
};

export const signOut = (): ThunkAction => async dispatch => {
  await signOutUser();
  dispatch(resetSession());
};

export const updateUser = (
  params: UserUpdateParams
): ThunkAction => async dispatch => {
  const { username } = params;
  try {
    await updateCurrentUser(params);
    if (username) {
      dispatch(userFsa.updateUser({ username }));
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (): ThunkAction => async dispatch => {
  await deleteCurrentUser();
  dispatch(resetSession());
};
