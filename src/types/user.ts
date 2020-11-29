import { Movies } from './movie';

export interface User {
  isSignedIn: boolean;
  username?: string;
}

export type UserResponse = Omit<User, 'isSignedIn'> & {
  movies: Movies;
};

export interface UserUpdateParams {
  username: string;
  password: string;
}

export interface UserSignInErrors {
  username?: string;
  password?: string;
  repeatedPassword?: string;
}
