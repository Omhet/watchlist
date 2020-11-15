import { createAction } from 'typesafe-actions';
import { Movies } from '../../types/movie';
import { User } from '../../types/user';
import { fetchCurrentUser, signInUser } from '../../utils/request';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from '../types';
import { moviesFsa } from './movies';

export const fsa = {
  signIn: createAction('USER/SIGN IN')<Omit<User, 'isSignedIn'>>(),
  signOut: createAction('USER/SIGN OUT')()
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
  }));

export const getCurrentUser = (): ThunkAction => async dispatch => {
  const { username, movies } = await fetchCurrentUser();
  dispatch(userFsa.signIn({ username }));
  const moviesInWatchlist: Movies = movies.map(movie => ({
    ...movie,
    isInWatchlist: true
  }));
  dispatch(moviesFsa.setMoviesToWatchlist(moviesInWatchlist));
};

export const signIn = (
  username: string,
  password: string
): ThunkAction => async dispatch => {
  console.log(username, password);
  await signInUser(username, password);
  dispatch(getCurrentUser());
};
