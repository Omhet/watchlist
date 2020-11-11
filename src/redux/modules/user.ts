import { createAction } from 'typesafe-actions';
import { User } from '../../types/user';
import { withState } from '../helpers/typesafe-reducer';

export const fsa = {
  signIn: createAction('USER/SIGN IN')<Omit<User, 'isLoggedIn'>>(),
  signOut: createAction('USER/SIGN OUT')()
};
export const userFsa = fsa;

const initialState: User = {
  isLoggedIn: false
};

export const movies = withState(initialState)
  .add(fsa.signIn, (state, { payload }) => ({
    ...state,
    ...payload,
    isLoggedIn: true
  }))
  .add(fsa.signOut, state => ({
    ...state,
    isLoggedIn: false
  }));
