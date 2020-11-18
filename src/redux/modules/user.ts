import { createAction } from 'typesafe-actions';
import { User, UserUpdateParams } from '../../types/user';
import {
  fetchCurrentUser,
  signInUser,
  signOutUser,
  updateCurrentUser
} from '../../utils/request';
import { withState } from '../helpers/typesafe-reducer';
import { getUserName } from '../selectors/user';
import { ThunkAction } from '../types';
import { moviesFsa } from './movies';

type UserInfo = Omit<User, 'isSignedIn'>;

export const fsa = {
  signIn: createAction('USER/SIGN IN')<UserInfo>(),
  signOut: createAction('USER/SIGN OUT')(),
  updateUser: createAction('USER/UPDATE')<Partial<UserInfo>>()
};
export const userFsa = fsa;

const initialState: User = {
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

export const signOut = (): ThunkAction => async dispatch => {
  await signOutUser();
  dispatch(fsa.signOut());
  dispatch(moviesFsa.setWatchlist([]));
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
