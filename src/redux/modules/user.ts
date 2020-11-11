import { createAction } from 'typesafe-actions';
import { User } from '../../types/user';
import { withState } from '../helpers/typesafe-reducer';

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
